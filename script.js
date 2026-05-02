/**
 * Course Portal - AI No-Code Platform
 * Interactive functionality for lesson navigation, video playback, and progress tracking
 */

// ============================================
// COURSE DATA (from YouTube Playlist)
// ============================================

const courseData = {
    title: "AI No-Code: Build Your Own AI Solutions",
    modules: [
        {
            id: "module-1",
            title: "Module 1: AI No-Code Foundations",
            description: "Learn to build AI solutions without coding. From the Delivery Pilot framework to dynamic AI systems.",
            lessons: [
                {
                    id: "lesson-1",
                    title: "AI No-Code: Build Your Own AI Solutions (Step-by-Step)",
                    videoId: "yI5BIb74kVI",
                    duration: "24:54",
                    durationSeconds: 1494,
                    description: "The golden microphone of enterprise engineering is too heavy to carry. In this video, Rifat introduces the Delivery Pilot framework. We are moving away from rigid 'stone statue' rules and moving toward 'liquid mercury' dynamic AI systems. Whether you are a mom or dad putting kids to bed or someone trying to escape the complexity of traditional engineering, this step-by-step guide will help you build your own AI solutions without writing a single line of code."
                },
                {
                    id: "lesson-2",
                    title: "The Agentic Era: How to Build a Digital Workforce & Close the AI Skill Gap",
                    videoId: "c1UotPbvKoQ",
                    duration: "19:51",
                    durationSeconds: 1191,
                    description: "Welcome to the Agentic Era. This video explores how to build a digital workforce using AI agents and how to close the growing AI skill gap. Learn about autonomous AI systems that can perform tasks, make decisions, and collaborate with humans to create real business value."
                },
                {
                    id: "lesson-3",
                    title: "Learn Text Blaze To Boost Your AI Based Self Learning",
                    videoId: "DNQEQZPnpfg",
                    duration: "5:03",
                    durationSeconds: 303,
                    description: "Text Blaze is a powerful text expansion tool that can supercharge your AI-based self-learning journey. In this quick tutorial, learn how to use Text Blaze to create shortcuts, templates, and automated workflows that save hours of typing and help you learn faster with AI tools."
                }
            ]
        }
    ]
};

// ============================================
// STATE MANAGEMENT
// ============================================

let currentLessonId = null;
let completedLessons = new Set();

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('courseProgress');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            completedLessons = new Set(data.completedLessons || []);
            currentLessonId = data.currentLessonId || null;
        } catch (e) {
            console.warn('Failed to load progress:', e);
        }
    }
}

// Save progress to localStorage
function saveProgress() {
    const data = {
        completedLessons: Array.from(completedLessons),
        currentLessonId: currentLessonId
    };
    localStorage.setItem('courseProgress', JSON.stringify(data));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatDuration(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function getTotalLessons() {
    return courseData.modules.reduce((total, module) => total + module.lessons.length, 0);
}

function getAllLessons() {
    const lessons = [];
    courseData.modules.forEach(module => {
        module.lessons.forEach(lesson => {
            lessons.push({ ...lesson, moduleId: module.id });
        });
    });
    return lessons;
}

function getLessonById(id) {
    return getAllLessons().find(l => l.id === id);
}

function getLessonIndex(id) {
    return getAllLessons().findIndex(l => l.id === id);
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderModules() {
    const container = document.getElementById('course-modules');
    if (!container) return;

    container.innerHTML = '';

    courseData.modules.forEach(module => {
        const moduleEl = document.createElement('div');
        moduleEl.className = 'module';
        moduleEl.dataset.moduleId = module.id;

        const header = document.createElement('div');
        header.className = 'module-header';
        header.innerHTML = `
            <span>${module.title}</span>
            <i class="fa-solid fa-chevron-down"></i>
        `;

        const lessonsContainer = document.createElement('div');
        lessonsContainer.className = 'module-lessons open';

        module.lessons.forEach(lesson => {
            const isActive = lesson.id === currentLessonId;
            const isCompleted = completedLessons.has(lesson.id);

            const lessonEl = document.createElement('div');
            lessonEl.className = `lesson-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            lessonEl.dataset.lessonId = lesson.id;
            lessonEl.innerHTML = `
                <span class="lesson-status">
                    <i class="${isCompleted ? 'fa-solid fa-check-circle' : (isActive ? 'fa-solid fa-play-circle' : 'fa-regular fa-circle')}"></i>
                </span>
                <div class="lesson-info">
                    <span class="lesson-title">${lesson.title}</span>
                    <span class="lesson-duration"><i class="fa-regular fa-clock"></i> ${lesson.duration}</span>
                </div>
            `;

            lessonEl.addEventListener('click', () => selectLesson(lesson.id));
            lessonsContainer.appendChild(lessonEl);
        });

        header.addEventListener('click', () => {
            header.classList.toggle('expanded');
            lessonsContainer.classList.toggle('open');
        });

        moduleEl.appendChild(header);
        moduleEl.appendChild(lessonsContainer);
        container.appendChild(moduleEl);
    });
}

function updateProgress() {
    const total = getTotalLessons();
    const completed = completedLessons.size;
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

    const percentageEl = document.getElementById('progress-percentage');
    const fillEl = document.getElementById('progress-bar-fill');

    if (percentageEl) percentageEl.textContent = `${percentage}%`;
    if (fillEl) fillEl.style.width = `${percentage}%`;
}

function renderVideoPlayer(videoId) {
    const container = document.getElementById('video-player-container');
    if (!container) return;

    container.outerHTML = `
        <iframe
            id="video-player-container"
            src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
        </iframe>
    `;
}

function renderPlaceholder() {
    const container = document.getElementById('video-player-container');
    if (!container) return;

    container.outerHTML = `
        <div id="video-player-container" class="placeholder-video">
            <i class="fa-brands fa-youtube"></i>
            <p>Select a lesson from the menu to begin learning</p>
        </div>
    `;
}

function updateLessonDetails(lesson) {
    const titleEl = document.getElementById('current-lesson-title');
    const detailTitleEl = document.getElementById('lesson-detail-title');
    const descEl = document.getElementById('lesson-description');
    const completeBtn = document.getElementById('mark-complete-btn');

    if (titleEl) titleEl.textContent = lesson.title;
    if (detailTitleEl) detailTitleEl.textContent = lesson.title;
    if (descEl) descEl.innerHTML = `<p>${lesson.description}</p>`;

    if (completeBtn) {
        const isCompleted = completedLessons.has(lesson.id);
        completeBtn.disabled = false;
        completeBtn.innerHTML = isCompleted
            ? '<i class="fa-solid fa-check"></i> Completed'
            : '<i class="fa-solid fa-check"></i> Mark as Complete';
        completeBtn.classList.toggle('completed', isCompleted);
    }
}

function updateNavigation() {
    const prevBtn = document.getElementById('prev-lesson-btn');
    const nextBtn = document.getElementById('next-lesson-btn');
    const lessons = getAllLessons();
    const currentIndex = getLessonIndex(currentLessonId);

    if (prevBtn) {
        prevBtn.disabled = currentIndex <= 0;
        prevBtn.onclick = () => {
            if (currentIndex > 0) {
                selectLesson(lessons[currentIndex - 1].id);
            }
        };
    }

    if (nextBtn) {
        nextBtn.disabled = currentIndex >= lessons.length - 1;
        nextBtn.onclick = () => {
            if (currentIndex < lessons.length - 1) {
                selectLesson(lessons[currentIndex + 1].id);
            }
        };
    }
}

// ============================================
// INTERACTION FUNCTIONS
// ============================================

function selectLesson(lessonId) {
    const lesson = getLessonById(lessonId);
    if (!lesson) return;

    currentLessonId = lessonId;
    saveProgress();

    // Update UI
    renderModules();
    renderVideoPlayer(lesson.videoId);
    updateLessonDetails(lesson);
    updateNavigation();
    updateProgress();

    // Scroll to top on mobile
    if (window.innerWidth <= 1024) {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
        closeSidebar();
    }
}

function markAsComplete() {
    if (!currentLessonId) return;

    const isCompleted = completedLessons.has(currentLessonId);

    if (isCompleted) {
        completedLessons.delete(currentLessonId);
    } else {
        completedLessons.add(currentLessonId);
    }

    saveProgress();
    renderModules();
    updateProgress();

    const completeBtn = document.getElementById('mark-complete-btn');
    if (completeBtn) {
        const nowCompleted = completedLessons.has(currentLessonId);
        completeBtn.innerHTML = nowCompleted
            ? '<i class="fa-solid fa-check"></i> Completed'
            : '<i class="fa-solid fa-check"></i> Mark as Complete';
        completeBtn.classList.toggle('completed', nowCompleted);
    }
}

// ============================================
// SIDEBAR MOBILE
// ============================================

function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.add('open');

    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }
    overlay.classList.add('active');
    overlay.addEventListener('click', closeSidebar, { once: true });
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');

    const overlay = document.querySelector('.overlay');
    if (overlay) overlay.classList.remove('active');
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

function handleKeyboard(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.key) {
        case 'ArrowRight':
            document.getElementById('next-lesson-btn')?.click();
            break;
        case 'ArrowLeft':
            document.getElementById('prev-lesson-btn')?.click();
            break;
        case ' ':
            e.preventDefault();
            document.getElementById('mark-complete-btn')?.click();
            break;
    }
}

// ============================================
// INITIALIZATION
// ============================================

function init() {
    loadProgress();
    renderModules();
    updateProgress();

    // Mark complete button
    const completeBtn = document.getElementById('mark-complete-btn');
    if (completeBtn) {
        completeBtn.addEventListener('click', markAsComplete);
    }

    // Mobile toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', openSidebar);
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);

    // Auto-select first lesson if none selected
    if (!currentLessonId) {
        const lessons = getAllLessons();
        if (lessons.length > 0) {
            selectLesson(lessons[0].id);
        }
    } else {
        // Restore current lesson
        const lesson = getLessonById(currentLessonId);
        if (lesson) {
            renderVideoPlayer(lesson.videoId);
            updateLessonDetails(lesson);
            updateNavigation();
        }
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
