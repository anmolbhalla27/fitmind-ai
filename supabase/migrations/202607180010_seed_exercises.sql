-- ============================================================
-- SEED EXERCISE CATEGORIES
-- ============================================================

insert into public.exercise_categories (name)
values
('Chest'),
('Back'),
('Shoulders'),
('Legs'),
('Arms'),
('Core'),
('Cardio')
on conflict (name) do nothing;

-- ============================================================
-- CHEST
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Bench Press',
    'Barbell',
    'Lower the bar to your chest and press upward.'
),
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Incline Bench Press',
    'Barbell',
    'Press the bar upward from an incline bench.'
),
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Incline Dumbbell Press',
    'Dumbbell',
    'Press dumbbells upward from an incline bench.'
),
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Flat Dumbbell Press',
    'Dumbbell',
    'Press dumbbells while lying on a flat bench.'
),
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Cable Fly',
    'Cable',
    'Bring both handles together with a slight bend in the elbows.'
),
(
    (select id from public.exercise_categories where name = 'Chest'),
    'Push Up',
    'Bodyweight',
    'Lower your body until your chest nearly touches the floor.'
)
on conflict do nothing;

-- ============================================================
-- BACK
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Back'),
    'Pull Up',
    'Bodyweight',
    'Pull yourself until your chin passes the bar.'
),
(
    (select id from public.exercise_categories where name = 'Back'),
    'Lat Pulldown',
    'Cable',
    'Pull the bar toward your upper chest.'
),
(
    (select id from public.exercise_categories where name = 'Back'),
    'Barbell Row',
    'Barbell',
    'Pull the bar toward your lower chest while maintaining a flat back.'
),
(
    (select id from public.exercise_categories where name = 'Back'),
    'Seated Cable Row',
    'Cable',
    'Pull the handle toward your torso.'
),
(
    (select id from public.exercise_categories where name = 'Back'),
    'Deadlift',
    'Barbell',
    'Lift the bar by extending your hips and knees together.'
)
on conflict do nothing;

-- ============================================================
-- SHOULDERS
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Shoulders'),
    'Overhead Press',
    'Barbell',
    'Press the bar overhead until your arms are locked.'
),
(
    (select id from public.exercise_categories where name = 'Shoulders'),
    'Dumbbell Shoulder Press',
    'Dumbbell',
    'Press both dumbbells overhead.'
),
(
    (select id from public.exercise_categories where name = 'Shoulders'),
    'Lateral Raise',
    'Dumbbell',
    'Raise the dumbbells to shoulder height.'
),
(
    (select id from public.exercise_categories where name = 'Shoulders'),
    'Front Raise',
    'Dumbbell',
    'Raise the dumbbells in front of your body.'
),
(
    (select id from public.exercise_categories where name = 'Shoulders'),
    'Face Pull',
    'Cable',
    'Pull the rope toward your face.'
)
on conflict do nothing;

-- ============================================================
-- LEGS
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Back Squat',
    'Barbell',
    'Lower until thighs are parallel then stand.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Front Squat',
    'Barbell',
    'Keep elbows high while squatting.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Romanian Deadlift',
    'Barbell',
    'Hinge at the hips while keeping the back straight.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Leg Press',
    'Machine',
    'Push the platform until your legs are extended.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Walking Lunge',
    'Dumbbell',
    'Step forward and lower your rear knee toward the floor.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Leg Extension',
    'Machine',
    'Extend your knees fully.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Leg Curl',
    'Machine',
    'Curl the pad toward your glutes.'
),
(
    (select id from public.exercise_categories where name = 'Legs'),
    'Standing Calf Raise',
    'Machine',
    'Raise your heels as high as possible.'
)
on conflict do nothing;

-- ============================================================
-- ARMS
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Barbell Curl',
    'Barbell',
    'Curl the bar toward your shoulders.'
),
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Hammer Curl',
    'Dumbbell',
    'Curl dumbbells with a neutral grip.'
),
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Preacher Curl',
    'EZ Bar',
    'Curl while keeping your upper arms on the pad.'
),
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Tricep Pushdown',
    'Cable',
    'Push the handle downward until your elbows are fully extended.'
),
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Overhead Tricep Extension',
    'Cable',
    'Extend your arms overhead.'
),
(
    (select id from public.exercise_categories where name = 'Arms'),
    'Close Grip Bench Press',
    'Barbell',
    'Press the bar using a narrow grip.'
)
on conflict do nothing;

-- ============================================================
-- CORE
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Core'),
    'Plank',
    'Bodyweight',
    'Hold a straight-body position.'
),
(
    (select id from public.exercise_categories where name = 'Core'),
    'Crunch',
    'Bodyweight',
    'Lift your shoulders from the floor.'
),
(
    (select id from public.exercise_categories where name = 'Core'),
    'Hanging Leg Raise',
    'Bodyweight',
    'Raise your legs until parallel.'
),
(
    (select id from public.exercise_categories where name = 'Core'),
    'Russian Twist',
    'Bodyweight',
    'Rotate your torso side to side.'
)
on conflict do nothing;

-- ============================================================
-- CARDIO
-- ============================================================

insert into public.exercises (category_id, name, equipment, instructions)
values
(
    (select id from public.exercise_categories where name = 'Cardio'),
    'Running',
    'None',
    'Run at a comfortable pace.'
),
(
    (select id from public.exercise_categories where name = 'Cardio'),
    'Walking',
    'None',
    'Walk continuously at a brisk pace.'
),
(
    (select id from public.exercise_categories where name = 'Cardio'),
    'Cycling',
    'Bike',
    'Maintain a steady cadence.'
),
(
    (select id from public.exercise_categories where name = 'Cardio'),
    'Jump Rope',
    'Jump Rope',
    'Jump continuously while maintaining rhythm.'
)
on conflict do nothing;