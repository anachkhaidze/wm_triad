/******************* 
 * Wm_Deepgen *
 *******************/


// store info about the experiment session:
let expName = 'WM_Deepgen';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};

// Start code blocks for 'Before Experiment'





final_experiment_trials = 0;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setup_jsRoutineBegin());
flowScheduler.add(setup_jsRoutineEachFrame());
flowScheduler.add(setup_jsRoutineEnd());
flowScheduler.add(Instructions1RoutineBegin());
flowScheduler.add(Instructions1RoutineEachFrame());
flowScheduler.add(Instructions1RoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);










































flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);




flowScheduler.add(end_expRoutineBegin());
flowScheduler.add(end_expRoutineEachFrame());
flowScheduler.add(end_expRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'initial_practice.csv', 'path': 'initial_practice.csv'},
    {'name': './stimuli/demo_stims/tricycle_12s.jpg', 'path': './stimuli/demo_stims/tricycle_12s.jpg'},
    {'name': './stimuli/demo_stims/scarf_07s.jpg', 'path': './stimuli/demo_stims/scarf_07s.jpg'},
    {'name': './stimuli/demo_stims/hearse_02s.jpg', 'path': './stimuli/demo_stims/hearse_02s.jpg'},
    {'name': './stimuli/demo_stims/tricycle_07s.jpg', 'path': './stimuli/demo_stims/tricycle_07s.jpg'},
    {'name': './stimuli/demo_stims/tricycle_11s.jpg', 'path': './stimuli/demo_stims/tricycle_11s.jpg'},
    {'name': './stimuli/demo_stims/scarf_06s.jpg', 'path': './stimuli/demo_stims/scarf_06s.jpg'},
    {'name': './stimuli/demo_stims/scarf_04s.jpg', 'path': './stimuli/demo_stims/scarf_04s.jpg'},
    {'name': './stimuli/cue_left.png', 'path': './stimuli/cue_left.png'},
    {'name': './stimuli/demo_stims/fire_alarm_01b.jpg', 'path': './stimuli/demo_stims/fire_alarm_01b.jpg'},
    {'name': './stimuli/demo_stims/gorilla_02s.jpg', 'path': './stimuli/demo_stims/gorilla_02s.jpg'},
    {'name': './stimuli/demo_stims/barbell_08s.jpg', 'path': './stimuli/demo_stims/barbell_08s.jpg'},
    {'name': './stimuli/demo_stims/fire_alarm_20s.jpg', 'path': './stimuli/demo_stims/fire_alarm_20s.jpg'},
    {'name': './stimuli/demo_stims/fire_alarm_07s.jpg', 'path': './stimuli/demo_stims/fire_alarm_07s.jpg'},
    {'name': './stimuli/demo_stims/gorilla_21s.jpg', 'path': './stimuli/demo_stims/gorilla_21s.jpg'},
    {'name': './stimuli/demo_stims/gorilla_12s.jpg', 'path': './stimuli/demo_stims/gorilla_12s.jpg'},
    {'name': './stimuli/cue_right.png', 'path': './stimuli/cue_right.png'},
    {'name': './stimuli/demo_stims/toilet_paper_10s.jpg', 'path': './stimuli/demo_stims/toilet_paper_10s.jpg'},
    {'name': './stimuli/demo_stims/hatchet_01b.jpg', 'path': './stimuli/demo_stims/hatchet_01b.jpg'},
    {'name': './stimuli/demo_stims/marshmallow_04s.jpg', 'path': './stimuli/demo_stims/marshmallow_04s.jpg'},
    {'name': './stimuli/demo_stims/toilet_paper_18s.jpg', 'path': './stimuli/demo_stims/toilet_paper_18s.jpg'},
    {'name': './stimuli/demo_stims/toilet_paper_03s.jpg', 'path': './stimuli/demo_stims/toilet_paper_03s.jpg'},
    {'name': './stimuli/demo_stims/hatchet_08s.jpg', 'path': './stimuli/demo_stims/hatchet_08s.jpg'},
    {'name': './stimuli/demo_stims/hatchet_20s.jpg', 'path': './stimuli/demo_stims/hatchet_20s.jpg'},
    {'name': './stimuli/demo_stims/gavel_03s.jpg', 'path': './stimuli/demo_stims/gavel_03s.jpg'},
    {'name': './stimuli/demo_stims/cat_05s.jpg', 'path': './stimuli/demo_stims/cat_05s.jpg'},
    {'name': './stimuli/demo_stims/scraper_12s.jpg', 'path': './stimuli/demo_stims/scraper_12s.jpg'},
    {'name': './stimuli/demo_stims/gavel_08s.jpg', 'path': './stimuli/demo_stims/gavel_08s.jpg'},
    {'name': './stimuli/demo_stims/gavel_07s.jpg', 'path': './stimuli/demo_stims/gavel_07s.jpg'},
    {'name': './stimuli/demo_stims/cat_08s.jpg', 'path': './stimuli/demo_stims/cat_08s.jpg'},
    {'name': './stimuli/demo_stims/cat_12s.jpg', 'path': './stimuli/demo_stims/cat_12s.jpg'},
    {'name': './stimuli/demo_stims/bathmat_03s.jpg', 'path': './stimuli/demo_stims/bathmat_03s.jpg'},
    {'name': './stimuli/demo_stims/paper_07s.jpg', 'path': './stimuli/demo_stims/paper_07s.jpg'},
    {'name': './stimuli/demo_stims/pocket_08s.jpg', 'path': './stimuli/demo_stims/pocket_08s.jpg'},
    {'name': './stimuli/demo_stims/bathmat_08s.jpg', 'path': './stimuli/demo_stims/bathmat_08s.jpg'},
    {'name': './stimuli/demo_stims/bathmat_04s.jpg', 'path': './stimuli/demo_stims/bathmat_04s.jpg'},
    {'name': './stimuli/demo_stims/paper_12s.jpg', 'path': './stimuli/demo_stims/paper_12s.jpg'},
    {'name': './stimuli/demo_stims/paper_08s.jpg', 'path': './stimuli/demo_stims/paper_08s.jpg'},
    {'name': 'resources/taskPhases_list.csv', 'path': 'resources/taskPhases_list.csv'},
    {'name': './resources/taskPhases_0.csv', 'path': './resources/taskPhases_0.csv'},
    {'name': './demo.csv', 'path': './demo.csv'},
    {'name': './stimuli/demo_stims/hippopotamus_03s.jpg', 'path': './stimuli/demo_stims/hippopotamus_03s.jpg'},
    {'name': './stimuli/demo_stims/chainsaw_16s.jpg', 'path': './stimuli/demo_stims/chainsaw_16s.jpg'},
    {'name': './stimuli/demo_stims/coffee_pot_02s.jpg', 'path': './stimuli/demo_stims/coffee_pot_02s.jpg'},
    {'name': './stimuli/demo_stims/hippopotamus_16s.jpg', 'path': './stimuli/demo_stims/hippopotamus_16s.jpg'},
    {'name': './stimuli/demo_stims/hippopotamus_11s.jpg', 'path': './stimuli/demo_stims/hippopotamus_11s.jpg'},
    {'name': './stimuli/demo_stims/chainsaw_08s.jpg', 'path': './stimuli/demo_stims/chainsaw_08s.jpg'},
    {'name': './stimuli/demo_stims/chainsaw_06s.jpg', 'path': './stimuli/demo_stims/chainsaw_06s.jpg'},
    {'name': './stimuli/cue_right.png', 'path': './stimuli/cue_right.png'},
    {'name': './stimuli/demo_stims/earring_01b.jpg', 'path': './stimuli/demo_stims/earring_01b.jpg'},
    {'name': './stimuli/demo_stims/shuffleboard_13s.jpg', 'path': './stimuli/demo_stims/shuffleboard_13s.jpg'},
    {'name': './stimuli/demo_stims/spout_05s.jpg', 'path': './stimuli/demo_stims/spout_05s.jpg'},
    {'name': './stimuli/demo_stims/earring_02s.jpg', 'path': './stimuli/demo_stims/earring_02s.jpg'},
    {'name': './stimuli/demo_stims/earring_11n.jpg', 'path': './stimuli/demo_stims/earring_11n.jpg'},
    {'name': './stimuli/demo_stims/shuffleboard_01b.jpg', 'path': './stimuli/demo_stims/shuffleboard_01b.jpg'},
    {'name': './stimuli/demo_stims/shuffleboard_07s.jpg', 'path': './stimuli/demo_stims/shuffleboard_07s.jpg'},
    {'name': './stimuli/demo_stims/spatula_13s.jpg', 'path': './stimuli/demo_stims/spatula_13s.jpg'},
    {'name': './stimuli/demo_stims/baton1_04s.jpg', 'path': './stimuli/demo_stims/baton1_04s.jpg'},
    {'name': './stimuli/demo_stims/chime_06s.jpg', 'path': './stimuli/demo_stims/chime_06s.jpg'},
    {'name': './stimuli/demo_stims/spatula_03s.jpg', 'path': './stimuli/demo_stims/spatula_03s.jpg'},
    {'name': './stimuli/demo_stims/spatula_02s.jpg', 'path': './stimuli/demo_stims/spatula_02s.jpg'},
    {'name': './stimuli/demo_stims/baton1_13s.jpg', 'path': './stimuli/demo_stims/baton1_13s.jpg'},
    {'name': './stimuli/demo_stims/baton1_15s.jpg', 'path': './stimuli/demo_stims/baton1_15s.jpg'},
    {'name': './stimuli/cue_left.png', 'path': './stimuli/cue_left.png'},
    {'name': './stimuli/demo_stims/lollipop_10s.jpg', 'path': './stimuli/demo_stims/lollipop_10s.jpg'},
    {'name': './stimuli/demo_stims/man_05s.jpg', 'path': './stimuli/demo_stims/man_05s.jpg'},
    {'name': './stimuli/demo_stims/coil_02s.jpg', 'path': './stimuli/demo_stims/coil_02s.jpg'},
    {'name': './stimuli/demo_stims/lollipop_06n.jpg', 'path': './stimuli/demo_stims/lollipop_06n.jpg'},
    {'name': './stimuli/demo_stims/lollipop_03s.jpg', 'path': './stimuli/demo_stims/lollipop_03s.jpg'},
    {'name': './stimuli/demo_stims/man_10s.jpg', 'path': './stimuli/demo_stims/man_10s.jpg'},
    {'name': './stimuli/demo_stims/man_02s.jpg', 'path': './stimuli/demo_stims/man_02s.jpg'},
    {'name': './stimuli/demo_stims/apple_08s.jpg', 'path': './stimuli/demo_stims/apple_08s.jpg'},
    {'name': './stimuli/demo_stims/kale_11s.jpg', 'path': './stimuli/demo_stims/kale_11s.jpg'},
    {'name': './stimuli/demo_stims/bonnet_12s.jpg', 'path': './stimuli/demo_stims/bonnet_12s.jpg'},
    {'name': './stimuli/demo_stims/apple_09s.jpg', 'path': './stimuli/demo_stims/apple_09s.jpg'},
    {'name': './stimuli/demo_stims/apple_03s.jpg', 'path': './stimuli/demo_stims/apple_03s.jpg'},
    {'name': './stimuli/demo_stims/kale_12s.jpg', 'path': './stimuli/demo_stims/kale_12s.jpg'},
    {'name': './stimuli/demo_stims/kale_02s.jpg', 'path': './stimuli/demo_stims/kale_02s.jpg'},
    {'name': './prac.csv', 'path': './prac.csv'},
    {'name': './stimuli/demo_stims/potholder_10s.jpg', 'path': './stimuli/demo_stims/potholder_10s.jpg'},
    {'name': './stimuli/demo_stims/lamb_03s.jpg', 'path': './stimuli/demo_stims/lamb_03s.jpg'},
    {'name': './stimuli/demo_stims/remote_control_12s.jpg', 'path': './stimuli/demo_stims/remote_control_12s.jpg'},
    {'name': './stimuli/demo_stims/potholder_08s.jpg', 'path': './stimuli/demo_stims/potholder_08s.jpg'},
    {'name': './stimuli/demo_stims/potholder_07s.jpg', 'path': './stimuli/demo_stims/potholder_07s.jpg'},
    {'name': './stimuli/demo_stims/lamb_11s.jpg', 'path': './stimuli/demo_stims/lamb_11s.jpg'},
    {'name': './stimuli/demo_stims/lamb_12s.jpg', 'path': './stimuli/demo_stims/lamb_12s.jpg'},
    {'name': './stimuli/demo_stims/diamond_11s.jpg', 'path': './stimuli/demo_stims/diamond_11s.jpg'},
    {'name': './stimuli/demo_stims/granola_12s.jpg', 'path': './stimuli/demo_stims/granola_12s.jpg'},
    {'name': './stimuli/demo_stims/tree_10s.jpg', 'path': './stimuli/demo_stims/tree_10s.jpg'},
    {'name': './stimuli/demo_stims/diamond_09s.jpg', 'path': './stimuli/demo_stims/diamond_09s.jpg'},
    {'name': './stimuli/demo_stims/diamond_10s.jpg', 'path': './stimuli/demo_stims/diamond_10s.jpg'},
    {'name': './stimuli/demo_stims/granola_11s.jpg', 'path': './stimuli/demo_stims/granola_11s.jpg'},
    {'name': './stimuli/demo_stims/granola_13s.jpg', 'path': './stimuli/demo_stims/granola_13s.jpg'},
    {'name': './stimuli/demo_stims/helmet_11s.jpg', 'path': './stimuli/demo_stims/helmet_11s.jpg'},
    {'name': './stimuli/demo_stims/pancake_11s.jpg', 'path': './stimuli/demo_stims/pancake_11s.jpg'},
    {'name': './stimuli/demo_stims/paintbrush_11s.jpg', 'path': './stimuli/demo_stims/paintbrush_11s.jpg'},
    {'name': './stimuli/demo_stims/helmet_12s.jpg', 'path': './stimuli/demo_stims/helmet_12s.jpg'},
    {'name': './stimuli/demo_stims/helmet_07s.jpg', 'path': './stimuli/demo_stims/helmet_07s.jpg'},
    {'name': './stimuli/demo_stims/pancake_12s.jpg', 'path': './stimuli/demo_stims/pancake_12s.jpg'},
    {'name': './stimuli/demo_stims/pancake_02n.jpg', 'path': './stimuli/demo_stims/pancake_02n.jpg'},
    {'name': './stimuli/demo_stims/lipstick_09s.jpg', 'path': './stimuli/demo_stims/lipstick_09s.jpg'},
    {'name': './stimuli/demo_stims/paint_04s.jpg', 'path': './stimuli/demo_stims/paint_04s.jpg'},
    {'name': './stimuli/demo_stims/squeegee_09s.jpg', 'path': './stimuli/demo_stims/squeegee_09s.jpg'},
    {'name': './stimuli/demo_stims/lipstick_11s.jpg', 'path': './stimuli/demo_stims/lipstick_11s.jpg'},
    {'name': './stimuli/demo_stims/lipstick_01b.jpg', 'path': './stimuli/demo_stims/lipstick_01b.jpg'},
    {'name': './stimuli/demo_stims/paint_12s.jpg', 'path': './stimuli/demo_stims/paint_12s.jpg'},
    {'name': './stimuli/demo_stims/paint_05s.jpg', 'path': './stimuli/demo_stims/paint_05s.jpg'},
    {'name': './stimuli/demo_stims/bra_07s.jpg', 'path': './stimuli/demo_stims/bra_07s.jpg'},
    {'name': './stimuli/demo_stims/flask_06s.jpg', 'path': './stimuli/demo_stims/flask_06s.jpg'},
    {'name': './stimuli/demo_stims/plaster_cast_02s.jpg', 'path': './stimuli/demo_stims/plaster_cast_02s.jpg'},
    {'name': './stimuli/demo_stims/bra_13s.jpg', 'path': './stimuli/demo_stims/bra_13s.jpg'},
    {'name': './stimuli/demo_stims/bra_02s.jpg', 'path': './stimuli/demo_stims/bra_02s.jpg'},
    {'name': './stimuli/demo_stims/flask_05s.jpg', 'path': './stimuli/demo_stims/flask_05s.jpg'},
    {'name': './stimuli/demo_stims/flask_03s.jpg', 'path': './stimuli/demo_stims/flask_03s.jpg'},
    {'name': './stimuli/demo_stims/buckle_04s.jpg', 'path': './stimuli/demo_stims/buckle_04s.jpg'},
    {'name': './stimuli/demo_stims/meat_grinder_01b.jpg', 'path': './stimuli/demo_stims/meat_grinder_01b.jpg'},
    {'name': './stimuli/demo_stims/nail_clippers_07s.jpg', 'path': './stimuli/demo_stims/nail_clippers_07s.jpg'},
    {'name': './stimuli/demo_stims/buckle_07s.jpg', 'path': './stimuli/demo_stims/buckle_07s.jpg'},
    {'name': './stimuli/demo_stims/buckle_10s.jpg', 'path': './stimuli/demo_stims/buckle_10s.jpg'},
    {'name': './stimuli/demo_stims/meat_grinder_03s.jpg', 'path': './stimuli/demo_stims/meat_grinder_03s.jpg'},
    {'name': './stimuli/demo_stims/meat_grinder_11s.jpg', 'path': './stimuli/demo_stims/meat_grinder_11s.jpg'},
    {'name': './stimuli/demo_stims/tee_07s.jpg', 'path': './stimuli/demo_stims/tee_07s.jpg'},
    {'name': './stimuli/demo_stims/fire_hydrant_08s.jpg', 'path': './stimuli/demo_stims/fire_hydrant_08s.jpg'},
    {'name': './stimuli/demo_stims/missile_11s.jpg', 'path': './stimuli/demo_stims/missile_11s.jpg'},
    {'name': './stimuli/demo_stims/tee_02s.jpg', 'path': './stimuli/demo_stims/tee_02s.jpg'},
    {'name': './stimuli/demo_stims/tee_04s.jpg', 'path': './stimuli/demo_stims/tee_04s.jpg'},
    {'name': './stimuli/demo_stims/fire_hydrant_12s.jpg', 'path': './stimuli/demo_stims/fire_hydrant_12s.jpg'},
    {'name': './stimuli/demo_stims/fire_hydrant_02s.jpg', 'path': './stimuli/demo_stims/fire_hydrant_02s.jpg'},
    {'name': './stimuli/demo_stims/aloe_08n.jpg', 'path': './stimuli/demo_stims/aloe_08n.jpg'},
    {'name': './stimuli/demo_stims/polar_bear_01b.jpg', 'path': './stimuli/demo_stims/polar_bear_01b.jpg'},
    {'name': './stimuli/demo_stims/kaleidoscope_05s.jpg', 'path': './stimuli/demo_stims/kaleidoscope_05s.jpg'},
    {'name': './stimuli/demo_stims/aloe_07s.jpg', 'path': './stimuli/demo_stims/aloe_07s.jpg'},
    {'name': './stimuli/demo_stims/aloe_04s.jpg', 'path': './stimuli/demo_stims/aloe_04s.jpg'},
    {'name': './stimuli/demo_stims/polar_bear_21s.jpg', 'path': './stimuli/demo_stims/polar_bear_21s.jpg'},
    {'name': './stimuli/demo_stims/polar_bear_18s.jpg', 'path': './stimuli/demo_stims/polar_bear_18s.jpg'},
    {'name': './stimuli/demo_stims/home_plate_10s.jpg', 'path': './stimuli/demo_stims/home_plate_10s.jpg'},
    {'name': './stimuli/demo_stims/blueberry_03s.jpg', 'path': './stimuli/demo_stims/blueberry_03s.jpg'},
    {'name': './stimuli/demo_stims/laser_pointer_03s.jpg', 'path': './stimuli/demo_stims/laser_pointer_03s.jpg'},
    {'name': './stimuli/demo_stims/home_plate_04s.jpg', 'path': './stimuli/demo_stims/home_plate_04s.jpg'},
    {'name': './stimuli/demo_stims/home_plate_06s.jpg', 'path': './stimuli/demo_stims/home_plate_06s.jpg'},
    {'name': './stimuli/demo_stims/blueberry_12n.jpg', 'path': './stimuli/demo_stims/blueberry_12n.jpg'},
    {'name': './stimuli/demo_stims/blueberry_07s.jpg', 'path': './stimuli/demo_stims/blueberry_07s.jpg'},
    {'name': './stimuli/demo_stims/football_helmet_04s.jpg', 'path': './stimuli/demo_stims/football_helmet_04s.jpg'},
    {'name': './stimuli/demo_stims/apron_07s.jpg', 'path': './stimuli/demo_stims/apron_07s.jpg'},
    {'name': './stimuli/demo_stims/tweezers_01b.jpg', 'path': './stimuli/demo_stims/tweezers_01b.jpg'},
    {'name': './stimuli/demo_stims/football_helmet_01b.jpg', 'path': './stimuli/demo_stims/football_helmet_01b.jpg'},
    {'name': './stimuli/demo_stims/football_helmet_03s.jpg', 'path': './stimuli/demo_stims/football_helmet_03s.jpg'},
    {'name': './stimuli/demo_stims/apron_05s.jpg', 'path': './stimuli/demo_stims/apron_05s.jpg'},
    {'name': './stimuli/demo_stims/apron_10s.jpg', 'path': './stimuli/demo_stims/apron_10s.jpg'},
    {'name': './stimuli/demo_stims/sponge_03s.jpg', 'path': './stimuli/demo_stims/sponge_03s.jpg'},
    {'name': './stimuli/demo_stims/wood_03s.jpg', 'path': './stimuli/demo_stims/wood_03s.jpg'},
    {'name': './stimuli/demo_stims/penholder_11s.jpg', 'path': './stimuli/demo_stims/penholder_11s.jpg'},
    {'name': './stimuli/demo_stims/sponge_10s.jpg', 'path': './stimuli/demo_stims/sponge_10s.jpg'},
    {'name': './stimuli/demo_stims/sponge_11s.jpg', 'path': './stimuli/demo_stims/sponge_11s.jpg'},
    {'name': './stimuli/demo_stims/wood_14s.jpg', 'path': './stimuli/demo_stims/wood_14s.jpg'},
    {'name': './stimuli/demo_stims/wood_11s.jpg', 'path': './stimuli/demo_stims/wood_11s.jpg'},
    {'name': './stimuli/demo_stims/buoy_06s.jpg', 'path': './stimuli/demo_stims/buoy_06s.jpg'},
    {'name': './stimuli/demo_stims/toy_06s.jpg', 'path': './stimuli/demo_stims/toy_06s.jpg'},
    {'name': './stimuli/demo_stims/bedpost_08s.jpg', 'path': './stimuli/demo_stims/bedpost_08s.jpg'},
    {'name': './stimuli/demo_stims/buoy_12s.jpg', 'path': './stimuli/demo_stims/buoy_12s.jpg'},
    {'name': './stimuli/demo_stims/buoy_05s.jpg', 'path': './stimuli/demo_stims/buoy_05s.jpg'},
    {'name': './stimuli/demo_stims/toy_11s.jpg', 'path': './stimuli/demo_stims/toy_11s.jpg'},
    {'name': './stimuli/demo_stims/toy_09s.jpg', 'path': './stimuli/demo_stims/toy_09s.jpg'},
    {'name': './resources/conditions_file_0.csv', 'path': './resources/conditions_file_0.csv'},
    {'name': './stimuli/238_2.jpg', 'path': './stimuli/238_2.jpg'},
    {'name': './stimuli/238_3.jpg', 'path': './stimuli/238_3.jpg'},
    {'name': './stimuli/238_1.jpg', 'path': './stimuli/238_1.jpg'},
    {'name': './stimuli/distractors/bottle_opener_05s.jpg', 'path': './stimuli/distractors/bottle_opener_05s.jpg'},
    {'name': './stimuli/distractors/bottle_opener_07s.jpg', 'path': './stimuli/distractors/bottle_opener_07s.jpg'},
    {'name': './stimuli/distractors/crane_17s.jpg', 'path': './stimuli/distractors/crane_17s.jpg'},
    {'name': './stimuli/distractors/crane_13s.jpg', 'path': './stimuli/distractors/crane_13s.jpg'},
    {'name': './stimuli/267_2.jpg', 'path': './stimuli/267_2.jpg'},
    {'name': './stimuli/267_3.jpg', 'path': './stimuli/267_3.jpg'},
    {'name': './stimuli/267_1.jpg', 'path': './stimuli/267_1.jpg'},
    {'name': './stimuli/distractors/twig_08s.jpg', 'path': './stimuli/distractors/twig_08s.jpg'},
    {'name': './stimuli/distractors/twig_03s.jpg', 'path': './stimuli/distractors/twig_03s.jpg'},
    {'name': './stimuli/distractors/domino_13s.jpg', 'path': './stimuli/distractors/domino_13s.jpg'},
    {'name': './stimuli/distractors/domino_16s.jpg', 'path': './stimuli/distractors/domino_16s.jpg'},
    {'name': './stimuli/75_2.jpg', 'path': './stimuli/75_2.jpg'},
    {'name': './stimuli/75_3.jpg', 'path': './stimuli/75_3.jpg'},
    {'name': './stimuli/75_1.jpg', 'path': './stimuli/75_1.jpg'},
    {'name': './stimuli/distractors/telephone_pole_01b.jpg', 'path': './stimuli/distractors/telephone_pole_01b.jpg'},
    {'name': './stimuli/distractors/telephone_pole_07s.jpg', 'path': './stimuli/distractors/telephone_pole_07s.jpg'},
    {'name': './stimuli/distractors/noodle_05s.jpg', 'path': './stimuli/distractors/noodle_05s.jpg'},
    {'name': './stimuli/distractors/noodle_11s.jpg', 'path': './stimuli/distractors/noodle_11s.jpg'},
    {'name': './stimuli/27_2.jpg', 'path': './stimuli/27_2.jpg'},
    {'name': './stimuli/27_3.jpg', 'path': './stimuli/27_3.jpg'},
    {'name': './stimuli/27_1.jpg', 'path': './stimuli/27_1.jpg'},
    {'name': './stimuli/distractors/counter_10s.jpg', 'path': './stimuli/distractors/counter_10s.jpg'},
    {'name': './stimuli/distractors/counter_02s.jpg', 'path': './stimuli/distractors/counter_02s.jpg'},
    {'name': './stimuli/distractors/cigar_20n.jpg', 'path': './stimuli/distractors/cigar_20n.jpg'},
    {'name': './stimuli/distractors/cigar_16n.jpg', 'path': './stimuli/distractors/cigar_16n.jpg'},
    {'name': './stimuli/150_2.jpg', 'path': './stimuli/150_2.jpg'},
    {'name': './stimuli/150_3.jpg', 'path': './stimuli/150_3.jpg'},
    {'name': './stimuli/150_1.jpg', 'path': './stimuli/150_1.jpg'},
    {'name': './stimuli/distractors/headlight_09s.jpg', 'path': './stimuli/distractors/headlight_09s.jpg'},
    {'name': './stimuli/distractors/headlight_13s.jpg', 'path': './stimuli/distractors/headlight_13s.jpg'},
    {'name': './stimuli/distractors/latte_04s.jpg', 'path': './stimuli/distractors/latte_04s.jpg'},
    {'name': './stimuli/distractors/latte_10s.jpg', 'path': './stimuli/distractors/latte_10s.jpg'},
    {'name': './stimuli/59_2.jpg', 'path': './stimuli/59_2.jpg'},
    {'name': './stimuli/59_3.jpg', 'path': './stimuli/59_3.jpg'},
    {'name': './stimuli/59_1.jpg', 'path': './stimuli/59_1.jpg'},
    {'name': './stimuli/distractors/rattle_11s.jpg', 'path': './stimuli/distractors/rattle_11s.jpg'},
    {'name': './stimuli/distractors/rattle_01b.jpg', 'path': './stimuli/distractors/rattle_01b.jpg'},
    {'name': './stimuli/distractors/snail_09s.jpg', 'path': './stimuli/distractors/snail_09s.jpg'},
    {'name': './stimuli/distractors/snail_04s.jpg', 'path': './stimuli/distractors/snail_04s.jpg'},
    {'name': './stimuli/51_2.jpg', 'path': './stimuli/51_2.jpg'},
    {'name': './stimuli/51_3.jpg', 'path': './stimuli/51_3.jpg'},
    {'name': './stimuli/51_1.jpg', 'path': './stimuli/51_1.jpg'},
    {'name': './stimuli/distractors/wreck_06s.jpg', 'path': './stimuli/distractors/wreck_06s.jpg'},
    {'name': './stimuli/distractors/wreck_01b.jpg', 'path': './stimuli/distractors/wreck_01b.jpg'},
    {'name': './stimuli/distractors/dumpling_11s.jpg', 'path': './stimuli/distractors/dumpling_11s.jpg'},
    {'name': './stimuli/distractors/dumpling_05s.jpg', 'path': './stimuli/distractors/dumpling_05s.jpg'},
    {'name': './stimuli/164_2.jpg', 'path': './stimuli/164_2.jpg'},
    {'name': './stimuli/164_3.jpg', 'path': './stimuli/164_3.jpg'},
    {'name': './stimuli/164_1.jpg', 'path': './stimuli/164_1.jpg'},
    {'name': './stimuli/distractors/porthole_10s.jpg', 'path': './stimuli/distractors/porthole_10s.jpg'},
    {'name': './stimuli/distractors/porthole_01b.jpg', 'path': './stimuli/distractors/porthole_01b.jpg'},
    {'name': './stimuli/distractors/clipper1_07s.jpg', 'path': './stimuli/distractors/clipper1_07s.jpg'},
    {'name': './stimuli/distractors/clipper1_13s.jpg', 'path': './stimuli/distractors/clipper1_13s.jpg'},
    {'name': './stimuli/94_2.jpg', 'path': './stimuli/94_2.jpg'},
    {'name': './stimuli/94_3.jpg', 'path': './stimuli/94_3.jpg'},
    {'name': './stimuli/94_1.jpg', 'path': './stimuli/94_1.jpg'},
    {'name': './stimuli/distractors/pony_12s.jpg', 'path': './stimuli/distractors/pony_12s.jpg'},
    {'name': './stimuli/distractors/pony_13s.jpg', 'path': './stimuli/distractors/pony_13s.jpg'},
    {'name': './stimuli/distractors/fly_05s.jpg', 'path': './stimuli/distractors/fly_05s.jpg'},
    {'name': './stimuli/distractors/fly_12s.jpg', 'path': './stimuli/distractors/fly_12s.jpg'},
    {'name': './stimuli/166_2.jpg', 'path': './stimuli/166_2.jpg'},
    {'name': './stimuli/166_3.jpg', 'path': './stimuli/166_3.jpg'},
    {'name': './stimuli/166_1.jpg', 'path': './stimuli/166_1.jpg'},
    {'name': './stimuli/distractors/plant_04s.jpg', 'path': './stimuli/distractors/plant_04s.jpg'},
    {'name': './stimuli/distractors/plant_08s.jpg', 'path': './stimuli/distractors/plant_08s.jpg'},
    {'name': './stimuli/distractors/seagull_03s.jpg', 'path': './stimuli/distractors/seagull_03s.jpg'},
    {'name': './stimuli/distractors/seagull_08s.jpg', 'path': './stimuli/distractors/seagull_08s.jpg'},
    {'name': './stimuli/79_2.jpg', 'path': './stimuli/79_2.jpg'},
    {'name': './stimuli/79_3.jpg', 'path': './stimuli/79_3.jpg'},
    {'name': './stimuli/79_1.jpg', 'path': './stimuli/79_1.jpg'},
    {'name': './stimuli/distractors/trap_13s.jpg', 'path': './stimuli/distractors/trap_13s.jpg'},
    {'name': './stimuli/distractors/trap_08s.jpg', 'path': './stimuli/distractors/trap_08s.jpg'},
    {'name': './stimuli/distractors/arugula_08s.jpg', 'path': './stimuli/distractors/arugula_08s.jpg'},
    {'name': './stimuli/distractors/arugula_13s.jpg', 'path': './stimuli/distractors/arugula_13s.jpg'},
    {'name': './stimuli/239_2.jpg', 'path': './stimuli/239_2.jpg'},
    {'name': './stimuli/239_3.jpg', 'path': './stimuli/239_3.jpg'},
    {'name': './stimuli/239_1.jpg', 'path': './stimuli/239_1.jpg'},
    {'name': './stimuli/distractors/caterpillar_06s.jpg', 'path': './stimuli/distractors/caterpillar_06s.jpg'},
    {'name': './stimuli/distractors/caterpillar_01b.jpg', 'path': './stimuli/distractors/caterpillar_01b.jpg'},
    {'name': './stimuli/distractors/suspenders_10s.jpg', 'path': './stimuli/distractors/suspenders_10s.jpg'},
    {'name': './stimuli/distractors/suspenders_11s.jpg', 'path': './stimuli/distractors/suspenders_11s.jpg'},
    {'name': './stimuli/33_2.jpg', 'path': './stimuli/33_2.jpg'},
    {'name': './stimuli/33_3.jpg', 'path': './stimuli/33_3.jpg'},
    {'name': './stimuli/33_1.jpg', 'path': './stimuli/33_1.jpg'},
    {'name': './stimuli/distractors/lightning_bug_02s.jpg', 'path': './stimuli/distractors/lightning_bug_02s.jpg'},
    {'name': './stimuli/distractors/lightning_bug_06s.jpg', 'path': './stimuli/distractors/lightning_bug_06s.jpg'},
    {'name': './stimuli/distractors/calzone_08s.jpg', 'path': './stimuli/distractors/calzone_08s.jpg'},
    {'name': './stimuli/distractors/calzone_12s.jpg', 'path': './stimuli/distractors/calzone_12s.jpg'},
    {'name': './stimuli/229_2.jpg', 'path': './stimuli/229_2.jpg'},
    {'name': './stimuli/229_3.jpg', 'path': './stimuli/229_3.jpg'},
    {'name': './stimuli/229_1.jpg', 'path': './stimuli/229_1.jpg'},
    {'name': './stimuli/distractors/shower_curtain_06s.jpg', 'path': './stimuli/distractors/shower_curtain_06s.jpg'},
    {'name': './stimuli/distractors/shower_curtain_18s.jpg', 'path': './stimuli/distractors/shower_curtain_18s.jpg'},
    {'name': './stimuli/distractors/melon_14s.jpg', 'path': './stimuli/distractors/melon_14s.jpg'},
    {'name': './stimuli/distractors/melon_03s.jpg', 'path': './stimuli/distractors/melon_03s.jpg'},
    {'name': './stimuli/139_2.jpg', 'path': './stimuli/139_2.jpg'},
    {'name': './stimuli/139_3.jpg', 'path': './stimuli/139_3.jpg'},
    {'name': './stimuli/139_1.jpg', 'path': './stimuli/139_1.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_10s.jpg', 'path': './stimuli/distractors/hot-air_balloon_10s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_17s.jpg', 'path': './stimuli/distractors/hot-air_balloon_17s.jpg'},
    {'name': './stimuli/distractors/abacus_06s.jpg', 'path': './stimuli/distractors/abacus_06s.jpg'},
    {'name': './stimuli/distractors/abacus_14s.jpg', 'path': './stimuli/distractors/abacus_14s.jpg'},
    {'name': './stimuli/172_2.jpg', 'path': './stimuli/172_2.jpg'},
    {'name': './stimuli/172_3.jpg', 'path': './stimuli/172_3.jpg'},
    {'name': './stimuli/172_1.jpg', 'path': './stimuli/172_1.jpg'},
    {'name': './stimuli/distractors/star_fruit_10s.jpg', 'path': './stimuli/distractors/star_fruit_10s.jpg'},
    {'name': './stimuli/distractors/star_fruit_07s.jpg', 'path': './stimuli/distractors/star_fruit_07s.jpg'},
    {'name': './stimuli/distractors/kilt_17s.jpg', 'path': './stimuli/distractors/kilt_17s.jpg'},
    {'name': './stimuli/distractors/kilt_09s.jpg', 'path': './stimuli/distractors/kilt_09s.jpg'},
    {'name': './stimuli/80_2.jpg', 'path': './stimuli/80_2.jpg'},
    {'name': './stimuli/80_3.jpg', 'path': './stimuli/80_3.jpg'},
    {'name': './stimuli/80_1.jpg', 'path': './stimuli/80_1.jpg'},
    {'name': './stimuli/distractors/deer_09s.jpg', 'path': './stimuli/distractors/deer_09s.jpg'},
    {'name': './stimuli/distractors/deer_11s.jpg', 'path': './stimuli/distractors/deer_11s.jpg'},
    {'name': './stimuli/distractors/test_tube_01b.jpg', 'path': './stimuli/distractors/test_tube_01b.jpg'},
    {'name': './stimuli/distractors/test_tube_14s.jpg', 'path': './stimuli/distractors/test_tube_14s.jpg'},
    {'name': './stimuli/36_2.jpg', 'path': './stimuli/36_2.jpg'},
    {'name': './stimuli/36_3.jpg', 'path': './stimuli/36_3.jpg'},
    {'name': './stimuli/36_1.jpg', 'path': './stimuli/36_1.jpg'},
    {'name': './stimuli/distractors/steamroller_07n.jpg', 'path': './stimuli/distractors/steamroller_07n.jpg'},
    {'name': './stimuli/distractors/steamroller_08n.jpg', 'path': './stimuli/distractors/steamroller_08n.jpg'},
    {'name': './stimuli/distractors/notebook_11s.jpg', 'path': './stimuli/distractors/notebook_11s.jpg'},
    {'name': './stimuli/distractors/notebook_03s.jpg', 'path': './stimuli/distractors/notebook_03s.jpg'},
    {'name': './stimuli/61_2.jpg', 'path': './stimuli/61_2.jpg'},
    {'name': './stimuli/61_3.jpg', 'path': './stimuli/61_3.jpg'},
    {'name': './stimuli/61_1.jpg', 'path': './stimuli/61_1.jpg'},
    {'name': './stimuli/distractors/snake_06s.jpg', 'path': './stimuli/distractors/snake_06s.jpg'},
    {'name': './stimuli/distractors/snake_01b.jpg', 'path': './stimuli/distractors/snake_01b.jpg'},
    {'name': './stimuli/distractors/easel_12s.jpg', 'path': './stimuli/distractors/easel_12s.jpg'},
    {'name': './stimuli/distractors/easel_02s.jpg', 'path': './stimuli/distractors/easel_02s.jpg'},
    {'name': './stimuli/35_2.jpg', 'path': './stimuli/35_2.jpg'},
    {'name': './stimuli/35_3.jpg', 'path': './stimuli/35_3.jpg'},
    {'name': './stimuli/35_1.jpg', 'path': './stimuli/35_1.jpg'},
    {'name': './stimuli/distractors/footprint_12s.jpg', 'path': './stimuli/distractors/footprint_12s.jpg'},
    {'name': './stimuli/distractors/footprint_15s.jpg', 'path': './stimuli/distractors/footprint_15s.jpg'},
    {'name': './stimuli/distractors/quill_07s.jpg', 'path': './stimuli/distractors/quill_07s.jpg'},
    {'name': './stimuli/distractors/quill_12s.jpg', 'path': './stimuli/distractors/quill_12s.jpg'},
    {'name': './stimuli/289_2.jpg', 'path': './stimuli/289_2.jpg'},
    {'name': './stimuli/289_3.jpg', 'path': './stimuli/289_3.jpg'},
    {'name': './stimuli/289_1.jpg', 'path': './stimuli/289_1.jpg'},
    {'name': './stimuli/distractors/loveseat_01b.jpg', 'path': './stimuli/distractors/loveseat_01b.jpg'},
    {'name': './stimuli/distractors/loveseat_16s.jpg', 'path': './stimuli/distractors/loveseat_16s.jpg'},
    {'name': './stimuli/distractors/bark_08s.jpg', 'path': './stimuli/distractors/bark_08s.jpg'},
    {'name': './stimuli/distractors/bark_04s.jpg', 'path': './stimuli/distractors/bark_04s.jpg'},
    {'name': './stimuli/135_2.jpg', 'path': './stimuli/135_2.jpg'},
    {'name': './stimuli/135_3.jpg', 'path': './stimuli/135_3.jpg'},
    {'name': './stimuli/135_1.jpg', 'path': './stimuli/135_1.jpg'},
    {'name': './stimuli/distractors/crow_09s.jpg', 'path': './stimuli/distractors/crow_09s.jpg'},
    {'name': './stimuli/distractors/crow_14s.jpg', 'path': './stimuli/distractors/crow_14s.jpg'},
    {'name': './stimuli/distractors/bell_pepper_12s.jpg', 'path': './stimuli/distractors/bell_pepper_12s.jpg'},
    {'name': './stimuli/distractors/bell_pepper_03s.jpg', 'path': './stimuli/distractors/bell_pepper_03s.jpg'},
    {'name': './stimuli/177_2.jpg', 'path': './stimuli/177_2.jpg'},
    {'name': './stimuli/177_3.jpg', 'path': './stimuli/177_3.jpg'},
    {'name': './stimuli/177_1.jpg', 'path': './stimuli/177_1.jpg'},
    {'name': './stimuli/distractors/moose_03s.jpg', 'path': './stimuli/distractors/moose_03s.jpg'},
    {'name': './stimuli/distractors/moose_01b.jpg', 'path': './stimuli/distractors/moose_01b.jpg'},
    {'name': './stimuli/distractors/cross_02s.jpg', 'path': './stimuli/distractors/cross_02s.jpg'},
    {'name': './stimuli/distractors/cross_03s.jpg', 'path': './stimuli/distractors/cross_03s.jpg'},
    {'name': './stimuli/196_2.jpg', 'path': './stimuli/196_2.jpg'},
    {'name': './stimuli/196_3.jpg', 'path': './stimuli/196_3.jpg'},
    {'name': './stimuli/196_1.jpg', 'path': './stimuli/196_1.jpg'},
    {'name': './stimuli/distractors/reindeer_03s.jpg', 'path': './stimuli/distractors/reindeer_03s.jpg'},
    {'name': './stimuli/distractors/reindeer_11s.jpg', 'path': './stimuli/distractors/reindeer_11s.jpg'},
    {'name': './stimuli/distractors/christmas_card_05s.jpg', 'path': './stimuli/distractors/christmas_card_05s.jpg'},
    {'name': './stimuli/distractors/christmas_card_15s.jpg', 'path': './stimuli/distractors/christmas_card_15s.jpg'},
    {'name': './stimuli/186_2.jpg', 'path': './stimuli/186_2.jpg'},
    {'name': './stimuli/186_3.jpg', 'path': './stimuli/186_3.jpg'},
    {'name': './stimuli/186_1.jpg', 'path': './stimuli/186_1.jpg'},
    {'name': './stimuli/distractors/root_12s.jpg', 'path': './stimuli/distractors/root_12s.jpg'},
    {'name': './stimuli/distractors/root_02s.jpg', 'path': './stimuli/distractors/root_02s.jpg'},
    {'name': './stimuli/distractors/gasket_10s.jpg', 'path': './stimuli/distractors/gasket_10s.jpg'},
    {'name': './stimuli/distractors/gasket_11s.jpg', 'path': './stimuli/distractors/gasket_11s.jpg'},
    {'name': './stimuli/241_2.jpg', 'path': './stimuli/241_2.jpg'},
    {'name': './stimuli/241_3.jpg', 'path': './stimuli/241_3.jpg'},
    {'name': './stimuli/241_1.jpg', 'path': './stimuli/241_1.jpg'},
    {'name': './stimuli/distractors/ram_02s.jpg', 'path': './stimuli/distractors/ram_02s.jpg'},
    {'name': './stimuli/distractors/ram_07s.jpg', 'path': './stimuli/distractors/ram_07s.jpg'},
    {'name': './stimuli/distractors/thumbtack_14s.jpg', 'path': './stimuli/distractors/thumbtack_14s.jpg'},
    {'name': './stimuli/distractors/thumbtack_08s.jpg', 'path': './stimuli/distractors/thumbtack_08s.jpg'},
    {'name': './stimuli/236_2.jpg', 'path': './stimuli/236_2.jpg'},
    {'name': './stimuli/236_3.jpg', 'path': './stimuli/236_3.jpg'},
    {'name': './stimuli/236_1.jpg', 'path': './stimuli/236_1.jpg'},
    {'name': './stimuli/distractors/speedboat_04s.jpg', 'path': './stimuli/distractors/speedboat_04s.jpg'},
    {'name': './stimuli/distractors/speedboat_02s.jpg', 'path': './stimuli/distractors/speedboat_02s.jpg'},
    {'name': './stimuli/distractors/banner_12s.jpg', 'path': './stimuli/distractors/banner_12s.jpg'},
    {'name': './stimuli/distractors/banner_02s.jpg', 'path': './stimuli/distractors/banner_02s.jpg'},
    {'name': './stimuli/235_2.jpg', 'path': './stimuli/235_2.jpg'},
    {'name': './stimuli/235_3.jpg', 'path': './stimuli/235_3.jpg'},
    {'name': './stimuli/235_1.jpg', 'path': './stimuli/235_1.jpg'},
    {'name': './stimuli/distractors/gutter_05s.jpg', 'path': './stimuli/distractors/gutter_05s.jpg'},
    {'name': './stimuli/distractors/gutter_02s.jpg', 'path': './stimuli/distractors/gutter_02s.jpg'},
    {'name': './stimuli/distractors/drink_05s.jpg', 'path': './stimuli/distractors/drink_05s.jpg'},
    {'name': './stimuli/distractors/drink_04s.jpg', 'path': './stimuli/distractors/drink_04s.jpg'},
    {'name': './stimuli/107_2.jpg', 'path': './stimuli/107_2.jpg'},
    {'name': './stimuli/107_3.jpg', 'path': './stimuli/107_3.jpg'},
    {'name': './stimuli/107_1.jpg', 'path': './stimuli/107_1.jpg'},
    {'name': './stimuli/distractors/dalmatian_10s.jpg', 'path': './stimuli/distractors/dalmatian_10s.jpg'},
    {'name': './stimuli/distractors/dalmatian_06s.jpg', 'path': './stimuli/distractors/dalmatian_06s.jpg'},
    {'name': './stimuli/distractors/petal_10s.jpg', 'path': './stimuli/distractors/petal_10s.jpg'},
    {'name': './stimuli/distractors/petal_07s.jpg', 'path': './stimuli/distractors/petal_07s.jpg'},
    {'name': './stimuli/226_2.jpg', 'path': './stimuli/226_2.jpg'},
    {'name': './stimuli/226_3.jpg', 'path': './stimuli/226_3.jpg'},
    {'name': './stimuli/226_1.jpg', 'path': './stimuli/226_1.jpg'},
    {'name': './stimuli/distractors/grille_07s.jpg', 'path': './stimuli/distractors/grille_07s.jpg'},
    {'name': './stimuli/distractors/grille_03s.jpg', 'path': './stimuli/distractors/grille_03s.jpg'},
    {'name': './stimuli/distractors/sequin_07s.jpg', 'path': './stimuli/distractors/sequin_07s.jpg'},
    {'name': './stimuli/distractors/sequin_12s.jpg', 'path': './stimuli/distractors/sequin_12s.jpg'},
    {'name': './stimuli/288_2.jpg', 'path': './stimuli/288_2.jpg'},
    {'name': './stimuli/288_3.jpg', 'path': './stimuli/288_3.jpg'},
    {'name': './stimuli/288_1.jpg', 'path': './stimuli/288_1.jpg'},
    {'name': './stimuli/distractors/scoreboard_07s.jpg', 'path': './stimuli/distractors/scoreboard_07s.jpg'},
    {'name': './stimuli/distractors/scoreboard_08s.jpg', 'path': './stimuli/distractors/scoreboard_08s.jpg'},
    {'name': './stimuli/distractors/gravy_14s.jpg', 'path': './stimuli/distractors/gravy_14s.jpg'},
    {'name': './stimuli/distractors/gravy_12s.jpg', 'path': './stimuli/distractors/gravy_12s.jpg'},
    {'name': './stimuli/69_2.jpg', 'path': './stimuli/69_2.jpg'},
    {'name': './stimuli/69_3.jpg', 'path': './stimuli/69_3.jpg'},
    {'name': './stimuli/69_1.jpg', 'path': './stimuli/69_1.jpg'},
    {'name': './stimuli/distractors/crate_16s.jpg', 'path': './stimuli/distractors/crate_16s.jpg'},
    {'name': './stimuli/distractors/crate_01b.jpg', 'path': './stimuli/distractors/crate_01b.jpg'},
    {'name': './stimuli/distractors/flower_07s.jpg', 'path': './stimuli/distractors/flower_07s.jpg'},
    {'name': './stimuli/distractors/flower_13s.jpg', 'path': './stimuli/distractors/flower_13s.jpg'},
    {'name': './stimuli/232_2.jpg', 'path': './stimuli/232_2.jpg'},
    {'name': './stimuli/232_3.jpg', 'path': './stimuli/232_3.jpg'},
    {'name': './stimuli/232_1.jpg', 'path': './stimuli/232_1.jpg'},
    {'name': './stimuli/distractors/cougar_06s.jpg', 'path': './stimuli/distractors/cougar_06s.jpg'},
    {'name': './stimuli/distractors/cougar_20s.jpg', 'path': './stimuli/distractors/cougar_20s.jpg'},
    {'name': './stimuli/distractors/chalk_10s.jpg', 'path': './stimuli/distractors/chalk_10s.jpg'},
    {'name': './stimuli/distractors/chalk_07s.jpg', 'path': './stimuli/distractors/chalk_07s.jpg'},
    {'name': './stimuli/49_2.jpg', 'path': './stimuli/49_2.jpg'},
    {'name': './stimuli/49_3.jpg', 'path': './stimuli/49_3.jpg'},
    {'name': './stimuli/49_1.jpg', 'path': './stimuli/49_1.jpg'},
    {'name': './stimuli/distractors/parking_meter_01b.jpg', 'path': './stimuli/distractors/parking_meter_01b.jpg'},
    {'name': './stimuli/distractors/parking_meter_15s.jpg', 'path': './stimuli/distractors/parking_meter_15s.jpg'},
    {'name': './stimuli/distractors/patty_09s.jpg', 'path': './stimuli/distractors/patty_09s.jpg'},
    {'name': './stimuli/distractors/patty_08s.jpg', 'path': './stimuli/distractors/patty_08s.jpg'},
    {'name': './stimuli/205_2.jpg', 'path': './stimuli/205_2.jpg'},
    {'name': './stimuli/205_3.jpg', 'path': './stimuli/205_3.jpg'},
    {'name': './stimuli/205_1.jpg', 'path': './stimuli/205_1.jpg'},
    {'name': './stimuli/distractors/hook1_16s.jpg', 'path': './stimuli/distractors/hook1_16s.jpg'},
    {'name': './stimuli/distractors/hook1_02s.jpg', 'path': './stimuli/distractors/hook1_02s.jpg'},
    {'name': './stimuli/distractors/column_04s.jpg', 'path': './stimuli/distractors/column_04s.jpg'},
    {'name': './stimuli/distractors/column_11s.jpg', 'path': './stimuli/distractors/column_11s.jpg'},
    {'name': './stimuli/143_2.jpg', 'path': './stimuli/143_2.jpg'},
    {'name': './stimuli/143_3.jpg', 'path': './stimuli/143_3.jpg'},
    {'name': './stimuli/143_1.jpg', 'path': './stimuli/143_1.jpg'},
    {'name': './stimuli/distractors/pheasant_09s.jpg', 'path': './stimuli/distractors/pheasant_09s.jpg'},
    {'name': './stimuli/distractors/pheasant_01b.jpg', 'path': './stimuli/distractors/pheasant_01b.jpg'},
    {'name': './stimuli/distractors/sawhorse_03s.jpg', 'path': './stimuli/distractors/sawhorse_03s.jpg'},
    {'name': './stimuli/distractors/sawhorse_01b.jpg', 'path': './stimuli/distractors/sawhorse_01b.jpg'},
    {'name': './stimuli/103_2.jpg', 'path': './stimuli/103_2.jpg'},
    {'name': './stimuli/103_3.jpg', 'path': './stimuli/103_3.jpg'},
    {'name': './stimuli/103_1.jpg', 'path': './stimuli/103_1.jpg'},
    {'name': './stimuli/distractors/keyboard_10s.jpg', 'path': './stimuli/distractors/keyboard_10s.jpg'},
    {'name': './stimuli/distractors/keyboard_07s.jpg', 'path': './stimuli/distractors/keyboard_07s.jpg'},
    {'name': './stimuli/distractors/blindfold_02s.jpg', 'path': './stimuli/distractors/blindfold_02s.jpg'},
    {'name': './stimuli/distractors/blindfold_04s.jpg', 'path': './stimuli/distractors/blindfold_04s.jpg'},
    {'name': './stimuli/24_2.jpg', 'path': './stimuli/24_2.jpg'},
    {'name': './stimuli/24_3.jpg', 'path': './stimuli/24_3.jpg'},
    {'name': './stimuli/24_1.jpg', 'path': './stimuli/24_1.jpg'},
    {'name': './stimuli/distractors/candy_02s.jpg', 'path': './stimuli/distractors/candy_02s.jpg'},
    {'name': './stimuli/distractors/candy_05s.jpg', 'path': './stimuli/distractors/candy_05s.jpg'},
    {'name': './stimuli/distractors/water_heater_03s.jpg', 'path': './stimuli/distractors/water_heater_03s.jpg'},
    {'name': './stimuli/distractors/water_heater_14s.jpg', 'path': './stimuli/distractors/water_heater_14s.jpg'},
    {'name': './stimuli/142_2.jpg', 'path': './stimuli/142_2.jpg'},
    {'name': './stimuli/142_3.jpg', 'path': './stimuli/142_3.jpg'},
    {'name': './stimuli/142_1.jpg', 'path': './stimuli/142_1.jpg'},
    {'name': './stimuli/distractors/recliner_01b.jpg', 'path': './stimuli/distractors/recliner_01b.jpg'},
    {'name': './stimuli/distractors/recliner_11s.jpg', 'path': './stimuli/distractors/recliner_11s.jpg'},
    {'name': './stimuli/distractors/syrup_07s.jpg', 'path': './stimuli/distractors/syrup_07s.jpg'},
    {'name': './stimuli/distractors/syrup_04s.jpg', 'path': './stimuli/distractors/syrup_04s.jpg'},
    {'name': './stimuli/283_2.jpg', 'path': './stimuli/283_2.jpg'},
    {'name': './stimuli/283_3.jpg', 'path': './stimuli/283_3.jpg'},
    {'name': './stimuli/283_1.jpg', 'path': './stimuli/283_1.jpg'},
    {'name': './stimuli/distractors/coral_12s.jpg', 'path': './stimuli/distractors/coral_12s.jpg'},
    {'name': './stimuli/distractors/coral_02s.jpg', 'path': './stimuli/distractors/coral_02s.jpg'},
    {'name': './stimuli/distractors/air_pump_01s.jpg', 'path': './stimuli/distractors/air_pump_01s.jpg'},
    {'name': './stimuli/distractors/air_pump_12s.jpg', 'path': './stimuli/distractors/air_pump_12s.jpg'},
    {'name': './stimuli/230_2.jpg', 'path': './stimuli/230_2.jpg'},
    {'name': './stimuli/230_3.jpg', 'path': './stimuli/230_3.jpg'},
    {'name': './stimuli/230_1.jpg', 'path': './stimuli/230_1.jpg'},
    {'name': './stimuli/distractors/dandelion_04s.jpg', 'path': './stimuli/distractors/dandelion_04s.jpg'},
    {'name': './stimuli/distractors/dandelion_03s.jpg', 'path': './stimuli/distractors/dandelion_03s.jpg'},
    {'name': './stimuli/distractors/pill_01b.jpg', 'path': './stimuli/distractors/pill_01b.jpg'},
    {'name': './stimuli/distractors/pill_05s.jpg', 'path': './stimuli/distractors/pill_05s.jpg'},
    {'name': './stimuli/161_2.jpg', 'path': './stimuli/161_2.jpg'},
    {'name': './stimuli/161_3.jpg', 'path': './stimuli/161_3.jpg'},
    {'name': './stimuli/161_1.jpg', 'path': './stimuli/161_1.jpg'},
    {'name': './stimuli/distractors/elephant_10n.jpg', 'path': './stimuli/distractors/elephant_10n.jpg'},
    {'name': './stimuli/distractors/elephant_01b.jpg', 'path': './stimuli/distractors/elephant_01b.jpg'},
    {'name': './stimuli/distractors/sim_card_08s.jpg', 'path': './stimuli/distractors/sim_card_08s.jpg'},
    {'name': './stimuli/distractors/sim_card_06s.jpg', 'path': './stimuli/distractors/sim_card_06s.jpg'},
    {'name': './stimuli/145_2.jpg', 'path': './stimuli/145_2.jpg'},
    {'name': './stimuli/145_3.jpg', 'path': './stimuli/145_3.jpg'},
    {'name': './stimuli/145_1.jpg', 'path': './stimuli/145_1.jpg'},
    {'name': './stimuli/distractors/poppy_09s.jpg', 'path': './stimuli/distractors/poppy_09s.jpg'},
    {'name': './stimuli/distractors/poppy_08s.jpg', 'path': './stimuli/distractors/poppy_08s.jpg'},
    {'name': './stimuli/distractors/paper_plate_05s.jpg', 'path': './stimuli/distractors/paper_plate_05s.jpg'},
    {'name': './stimuli/distractors/paper_plate_10s.jpg', 'path': './stimuli/distractors/paper_plate_10s.jpg'},
    {'name': './stimuli/257_2.jpg', 'path': './stimuli/257_2.jpg'},
    {'name': './stimuli/257_3.jpg', 'path': './stimuli/257_3.jpg'},
    {'name': './stimuli/257_1.jpg', 'path': './stimuli/257_1.jpg'},
    {'name': './stimuli/distractors/ferry_05s.jpg', 'path': './stimuli/distractors/ferry_05s.jpg'},
    {'name': './stimuli/distractors/ferry_10s.jpg', 'path': './stimuli/distractors/ferry_10s.jpg'},
    {'name': './stimuli/distractors/skeleton_10s.jpg', 'path': './stimuli/distractors/skeleton_10s.jpg'},
    {'name': './stimuli/distractors/skeleton_09s.jpg', 'path': './stimuli/distractors/skeleton_09s.jpg'},
    {'name': './stimuli/93_2.jpg', 'path': './stimuli/93_2.jpg'},
    {'name': './stimuli/93_3.jpg', 'path': './stimuli/93_3.jpg'},
    {'name': './stimuli/93_1.jpg', 'path': './stimuli/93_1.jpg'},
    {'name': './stimuli/distractors/walrus_05s.jpg', 'path': './stimuli/distractors/walrus_05s.jpg'},
    {'name': './stimuli/distractors/walrus_07s.jpg', 'path': './stimuli/distractors/walrus_07s.jpg'},
    {'name': './stimuli/distractors/checkbook_03s.jpg', 'path': './stimuli/distractors/checkbook_03s.jpg'},
    {'name': './stimuli/distractors/checkbook_12s.jpg', 'path': './stimuli/distractors/checkbook_12s.jpg'},
    {'name': './stimuli/52_2.jpg', 'path': './stimuli/52_2.jpg'},
    {'name': './stimuli/52_3.jpg', 'path': './stimuli/52_3.jpg'},
    {'name': './stimuli/52_1.jpg', 'path': './stimuli/52_1.jpg'},
    {'name': './stimuli/distractors/calzone_05s.jpg', 'path': './stimuli/distractors/calzone_05s.jpg'},
    {'name': './stimuli/distractors/calzone_07s.jpg', 'path': './stimuli/distractors/calzone_07s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_02s.jpg', 'path': './stimuli/distractors/hot-air_balloon_02s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_11s.jpg', 'path': './stimuli/distractors/hot-air_balloon_11s.jpg'},
    {'name': './stimuli/163_2.jpg', 'path': './stimuli/163_2.jpg'},
    {'name': './stimuli/163_3.jpg', 'path': './stimuli/163_3.jpg'},
    {'name': './stimuli/163_1.jpg', 'path': './stimuli/163_1.jpg'},
    {'name': './stimuli/distractors/tumbleweed_06s.jpg', 'path': './stimuli/distractors/tumbleweed_06s.jpg'},
    {'name': './stimuli/distractors/tumbleweed_09s.jpg', 'path': './stimuli/distractors/tumbleweed_09s.jpg'},
    {'name': './stimuli/distractors/camcorder_12s.jpg', 'path': './stimuli/distractors/camcorder_12s.jpg'},
    {'name': './stimuli/distractors/camcorder_03s.jpg', 'path': './stimuli/distractors/camcorder_03s.jpg'},
    {'name': './stimuli/114_2.jpg', 'path': './stimuli/114_2.jpg'},
    {'name': './stimuli/114_3.jpg', 'path': './stimuli/114_3.jpg'},
    {'name': './stimuli/114_1.jpg', 'path': './stimuli/114_1.jpg'},
    {'name': './stimuli/distractors/turtleneck_10s.jpg', 'path': './stimuli/distractors/turtleneck_10s.jpg'},
    {'name': './stimuli/distractors/turtleneck_03s.jpg', 'path': './stimuli/distractors/turtleneck_03s.jpg'},
    {'name': './stimuli/distractors/envelope_07s.jpg', 'path': './stimuli/distractors/envelope_07s.jpg'},
    {'name': './stimuli/distractors/envelope_02s.jpg', 'path': './stimuli/distractors/envelope_02s.jpg'},
    {'name': './stimuli/73_2.jpg', 'path': './stimuli/73_2.jpg'},
    {'name': './stimuli/73_3.jpg', 'path': './stimuli/73_3.jpg'},
    {'name': './stimuli/73_1.jpg', 'path': './stimuli/73_1.jpg'},
    {'name': './stimuli/distractors/mushroom_10n.jpg', 'path': './stimuli/distractors/mushroom_10n.jpg'},
    {'name': './stimuli/distractors/mushroom_09n.jpg', 'path': './stimuli/distractors/mushroom_09n.jpg'},
    {'name': './stimuli/distractors/drill_10s.jpg', 'path': './stimuli/distractors/drill_10s.jpg'},
    {'name': './stimuli/distractors/drill_12s.jpg', 'path': './stimuli/distractors/drill_12s.jpg'},
    {'name': './stimuli/12_2.jpg', 'path': './stimuli/12_2.jpg'},
    {'name': './stimuli/12_3.jpg', 'path': './stimuli/12_3.jpg'},
    {'name': './stimuli/12_1.jpg', 'path': './stimuli/12_1.jpg'},
    {'name': './stimuli/distractors/baton4_15s.jpg', 'path': './stimuli/distractors/baton4_15s.jpg'},
    {'name': './stimuli/distractors/baton4_10s.jpg', 'path': './stimuli/distractors/baton4_10s.jpg'},
    {'name': './stimuli/distractors/bed_14s.jpg', 'path': './stimuli/distractors/bed_14s.jpg'},
    {'name': './stimuli/distractors/bed_08s.jpg', 'path': './stimuli/distractors/bed_08s.jpg'},
    {'name': './stimuli/38_2.jpg', 'path': './stimuli/38_2.jpg'},
    {'name': './stimuli/38_3.jpg', 'path': './stimuli/38_3.jpg'},
    {'name': './stimuli/38_1.jpg', 'path': './stimuli/38_1.jpg'},
    {'name': './stimuli/distractors/beaver_10s.jpg', 'path': './stimuli/distractors/beaver_10s.jpg'},
    {'name': './stimuli/distractors/beaver_12s.jpg', 'path': './stimuli/distractors/beaver_12s.jpg'},
    {'name': './stimuli/distractors/hula_hoop_16s.jpg', 'path': './stimuli/distractors/hula_hoop_16s.jpg'},
    {'name': './stimuli/distractors/hula_hoop_01b.jpg', 'path': './stimuli/distractors/hula_hoop_01b.jpg'},
    {'name': './stimuli/223_2.jpg', 'path': './stimuli/223_2.jpg'},
    {'name': './stimuli/223_3.jpg', 'path': './stimuli/223_3.jpg'},
    {'name': './stimuli/223_1.jpg', 'path': './stimuli/223_1.jpg'},
    {'name': './stimuli/distractors/parrot_13s.jpg', 'path': './stimuli/distractors/parrot_13s.jpg'},
    {'name': './stimuli/distractors/parrot_20s.jpg', 'path': './stimuli/distractors/parrot_20s.jpg'},
    {'name': './stimuli/distractors/nail_file_13s.jpg', 'path': './stimuli/distractors/nail_file_13s.jpg'},
    {'name': './stimuli/distractors/nail_file_05s.jpg', 'path': './stimuli/distractors/nail_file_05s.jpg'},
    {'name': './stimuli/116_2.jpg', 'path': './stimuli/116_2.jpg'},
    {'name': './stimuli/116_3.jpg', 'path': './stimuli/116_3.jpg'},
    {'name': './stimuli/116_1.jpg', 'path': './stimuli/116_1.jpg'},
    {'name': './stimuli/distractors/puck_05s.jpg', 'path': './stimuli/distractors/puck_05s.jpg'},
    {'name': './stimuli/distractors/puck_08s.jpg', 'path': './stimuli/distractors/puck_08s.jpg'},
    {'name': './stimuli/distractors/milkshake_06s.jpg', 'path': './stimuli/distractors/milkshake_06s.jpg'},
    {'name': './stimuli/distractors/milkshake_17s.jpg', 'path': './stimuli/distractors/milkshake_17s.jpg'},
    {'name': './stimuli/179_2.jpg', 'path': './stimuli/179_2.jpg'},
    {'name': './stimuli/179_3.jpg', 'path': './stimuli/179_3.jpg'},
    {'name': './stimuli/179_1.jpg', 'path': './stimuli/179_1.jpg'},
    {'name': './stimuli/distractors/praying_mantis_17s.jpg', 'path': './stimuli/distractors/praying_mantis_17s.jpg'},
    {'name': './stimuli/distractors/praying_mantis_15s.jpg', 'path': './stimuli/distractors/praying_mantis_15s.jpg'},
    {'name': './stimuli/distractors/blower_14s.jpg', 'path': './stimuli/distractors/blower_14s.jpg'},
    {'name': './stimuli/distractors/blower_12s.jpg', 'path': './stimuli/distractors/blower_12s.jpg'},
    {'name': './stimuli/221_2.jpg', 'path': './stimuli/221_2.jpg'},
    {'name': './stimuli/221_3.jpg', 'path': './stimuli/221_3.jpg'},
    {'name': './stimuli/221_1.jpg', 'path': './stimuli/221_1.jpg'},
    {'name': './stimuli/distractors/mulberry_05s.jpg', 'path': './stimuli/distractors/mulberry_05s.jpg'},
    {'name': './stimuli/distractors/mulberry_15s.jpg', 'path': './stimuli/distractors/mulberry_15s.jpg'},
    {'name': './stimuli/distractors/urn_07s.jpg', 'path': './stimuli/distractors/urn_07s.jpg'},
    {'name': './stimuli/distractors/urn_09s.jpg', 'path': './stimuli/distractors/urn_09s.jpg'},
    {'name': './stimuli/32_2.jpg', 'path': './stimuli/32_2.jpg'},
    {'name': './stimuli/32_3.jpg', 'path': './stimuli/32_3.jpg'},
    {'name': './stimuli/32_1.jpg', 'path': './stimuli/32_1.jpg'},
    {'name': './stimuli/distractors/anteater_04s.jpg', 'path': './stimuli/distractors/anteater_04s.jpg'},
    {'name': './stimuli/distractors/anteater_06s.jpg', 'path': './stimuli/distractors/anteater_06s.jpg'},
    {'name': './stimuli/distractors/bell_pepper_07s.jpg', 'path': './stimuli/distractors/bell_pepper_07s.jpg'},
    {'name': './stimuli/distractors/bell_pepper_04s.jpg', 'path': './stimuli/distractors/bell_pepper_04s.jpg'},
    {'name': './stimuli/117_2.jpg', 'path': './stimuli/117_2.jpg'},
    {'name': './stimuli/117_3.jpg', 'path': './stimuli/117_3.jpg'},
    {'name': './stimuli/117_1.jpg', 'path': './stimuli/117_1.jpg'},
    {'name': './stimuli/distractors/grenade_06s.jpg', 'path': './stimuli/distractors/grenade_06s.jpg'},
    {'name': './stimuli/distractors/grenade_04s.jpg', 'path': './stimuli/distractors/grenade_04s.jpg'},
    {'name': './stimuli/distractors/extinguisher_07s.jpg', 'path': './stimuli/distractors/extinguisher_07s.jpg'},
    {'name': './stimuli/distractors/extinguisher_06s.jpg', 'path': './stimuli/distractors/extinguisher_06s.jpg'},
    {'name': './stimuli/213_2.jpg', 'path': './stimuli/213_2.jpg'},
    {'name': './stimuli/213_3.jpg', 'path': './stimuli/213_3.jpg'},
    {'name': './stimuli/213_1.jpg', 'path': './stimuli/213_1.jpg'},
    {'name': './stimuli/distractors/coleslaw_13s.jpg', 'path': './stimuli/distractors/coleslaw_13s.jpg'},
    {'name': './stimuli/distractors/coleslaw_04s.jpg', 'path': './stimuli/distractors/coleslaw_04s.jpg'},
    {'name': './stimuli/distractors/arm_06s.jpg', 'path': './stimuli/distractors/arm_06s.jpg'},
    {'name': './stimuli/distractors/arm_09s.jpg', 'path': './stimuli/distractors/arm_09s.jpg'},
    {'name': './stimuli/215_2.jpg', 'path': './stimuli/215_2.jpg'},
    {'name': './stimuli/215_3.jpg', 'path': './stimuli/215_3.jpg'},
    {'name': './stimuli/215_1.jpg', 'path': './stimuli/215_1.jpg'},
    {'name': './stimuli/distractors/trumpet_09s.jpg', 'path': './stimuli/distractors/trumpet_09s.jpg'},
    {'name': './stimuli/distractors/trumpet_06s.jpg', 'path': './stimuli/distractors/trumpet_06s.jpg'},
    {'name': './stimuli/distractors/abacus_08s.jpg', 'path': './stimuli/distractors/abacus_08s.jpg'},
    {'name': './stimuli/distractors/abacus_04s.jpg', 'path': './stimuli/distractors/abacus_04s.jpg'},
    {'name': './stimuli/19_2.jpg', 'path': './stimuli/19_2.jpg'},
    {'name': './stimuli/19_3.jpg', 'path': './stimuli/19_3.jpg'},
    {'name': './stimuli/19_1.jpg', 'path': './stimuli/19_1.jpg'},
    {'name': './stimuli/distractors/cooler_11s.jpg', 'path': './stimuli/distractors/cooler_11s.jpg'},
    {'name': './stimuli/distractors/cooler_10s.jpg', 'path': './stimuli/distractors/cooler_10s.jpg'},
    {'name': './stimuli/distractors/bologna_04s.jpg', 'path': './stimuli/distractors/bologna_04s.jpg'},
    {'name': './stimuli/distractors/bologna_11s.jpg', 'path': './stimuli/distractors/bologna_11s.jpg'},
    {'name': './stimuli/178_2.jpg', 'path': './stimuli/178_2.jpg'},
    {'name': './stimuli/178_3.jpg', 'path': './stimuli/178_3.jpg'},
    {'name': './stimuli/178_1.jpg', 'path': './stimuli/178_1.jpg'},
    {'name': './stimuli/distractors/grasshopper_06s.jpg', 'path': './stimuli/distractors/grasshopper_06s.jpg'},
    {'name': './stimuli/distractors/grasshopper_12s.jpg', 'path': './stimuli/distractors/grasshopper_12s.jpg'},
    {'name': './stimuli/distractors/pinball_07s.jpg', 'path': './stimuli/distractors/pinball_07s.jpg'},
    {'name': './stimuli/distractors/pinball_15s.jpg', 'path': './stimuli/distractors/pinball_15s.jpg'},
    {'name': './stimuli/199_2.jpg', 'path': './stimuli/199_2.jpg'},
    {'name': './stimuli/199_3.jpg', 'path': './stimuli/199_3.jpg'},
    {'name': './stimuli/199_1.jpg', 'path': './stimuli/199_1.jpg'},
    {'name': './stimuli/distractors/puffin_11s.jpg', 'path': './stimuli/distractors/puffin_11s.jpg'},
    {'name': './stimuli/distractors/puffin_21s.jpg', 'path': './stimuli/distractors/puffin_21s.jpg'},
    {'name': './stimuli/distractors/toaster_oven_05s.jpg', 'path': './stimuli/distractors/toaster_oven_05s.jpg'},
    {'name': './stimuli/distractors/toaster_oven_06s.jpg', 'path': './stimuli/distractors/toaster_oven_06s.jpg'},
    {'name': './stimuli/11_2.jpg', 'path': './stimuli/11_2.jpg'},
    {'name': './stimuli/11_3.jpg', 'path': './stimuli/11_3.jpg'},
    {'name': './stimuli/11_1.jpg', 'path': './stimuli/11_1.jpg'},
    {'name': './stimuli/distractors/cracker_02s.jpg', 'path': './stimuli/distractors/cracker_02s.jpg'},
    {'name': './stimuli/distractors/cracker_03s.jpg', 'path': './stimuli/distractors/cracker_03s.jpg'},
    {'name': './stimuli/distractors/slipper_06s.jpg', 'path': './stimuli/distractors/slipper_06s.jpg'},
    {'name': './stimuli/distractors/slipper_09s.jpg', 'path': './stimuli/distractors/slipper_09s.jpg'},
    {'name': './stimuli/96_2.jpg', 'path': './stimuli/96_2.jpg'},
    {'name': './stimuli/96_3.jpg', 'path': './stimuli/96_3.jpg'},
    {'name': './stimuli/96_1.jpg', 'path': './stimuli/96_1.jpg'},
    {'name': './stimuli/distractors/stereo_08s.jpg', 'path': './stimuli/distractors/stereo_08s.jpg'},
    {'name': './stimuli/distractors/stereo_11s.jpg', 'path': './stimuli/distractors/stereo_11s.jpg'},
    {'name': './stimuli/distractors/snake_11s.jpg', 'path': './stimuli/distractors/snake_11s.jpg'},
    {'name': './stimuli/distractors/snake_16n.jpg', 'path': './stimuli/distractors/snake_16n.jpg'},
    {'name': './stimuli/167_2.jpg', 'path': './stimuli/167_2.jpg'},
    {'name': './stimuli/167_3.jpg', 'path': './stimuli/167_3.jpg'},
    {'name': './stimuli/167_1.jpg', 'path': './stimuli/167_1.jpg'},
    {'name': './stimuli/distractors/target_09s.jpg', 'path': './stimuli/distractors/target_09s.jpg'},
    {'name': './stimuli/distractors/target_01b.jpg', 'path': './stimuli/distractors/target_01b.jpg'},
    {'name': './stimuli/distractors/eggnog_06s.jpg', 'path': './stimuli/distractors/eggnog_06s.jpg'},
    {'name': './stimuli/distractors/eggnog_10s.jpg', 'path': './stimuli/distractors/eggnog_10s.jpg'},
    {'name': './stimuli/40_2.jpg', 'path': './stimuli/40_2.jpg'},
    {'name': './stimuli/40_3.jpg', 'path': './stimuli/40_3.jpg'},
    {'name': './stimuli/40_1.jpg', 'path': './stimuli/40_1.jpg'},
    {'name': './stimuli/distractors/guillotine_06s.jpg', 'path': './stimuli/distractors/guillotine_06s.jpg'},
    {'name': './stimuli/distractors/guillotine_03s.jpg', 'path': './stimuli/distractors/guillotine_03s.jpg'},
    {'name': './stimuli/distractors/marble_08s.jpg', 'path': './stimuli/distractors/marble_08s.jpg'},
    {'name': './stimuli/distractors/marble_05s.jpg', 'path': './stimuli/distractors/marble_05s.jpg'},
    {'name': './stimuli/193_2.jpg', 'path': './stimuli/193_2.jpg'},
    {'name': './stimuli/193_3.jpg', 'path': './stimuli/193_3.jpg'},
    {'name': './stimuli/193_1.jpg', 'path': './stimuli/193_1.jpg'},
    {'name': './stimuli/distractors/beehive_06s.jpg', 'path': './stimuli/distractors/beehive_06s.jpg'},
    {'name': './stimuli/distractors/beehive_10s.jpg', 'path': './stimuli/distractors/beehive_10s.jpg'},
    {'name': './stimuli/distractors/centrifuge_09s.jpg', 'path': './stimuli/distractors/centrifuge_09s.jpg'},
    {'name': './stimuli/distractors/centrifuge_01b.jpg', 'path': './stimuli/distractors/centrifuge_01b.jpg'},
    {'name': './stimuli/258_2.jpg', 'path': './stimuli/258_2.jpg'},
    {'name': './stimuli/258_3.jpg', 'path': './stimuli/258_3.jpg'},
    {'name': './stimuli/258_1.jpg', 'path': './stimuli/258_1.jpg'},
    {'name': './stimuli/distractors/ladybug_08s.jpg', 'path': './stimuli/distractors/ladybug_08s.jpg'},
    {'name': './stimuli/distractors/ladybug_05s.jpg', 'path': './stimuli/distractors/ladybug_05s.jpg'},
    {'name': './stimuli/distractors/insole_02s.jpg', 'path': './stimuli/distractors/insole_02s.jpg'},
    {'name': './stimuli/distractors/insole_09s.jpg', 'path': './stimuli/distractors/insole_09s.jpg'},
    {'name': './stimuli/206_2.jpg', 'path': './stimuli/206_2.jpg'},
    {'name': './stimuli/206_3.jpg', 'path': './stimuli/206_3.jpg'},
    {'name': './stimuli/206_1.jpg', 'path': './stimuli/206_1.jpg'},
    {'name': './stimuli/distractors/volleyball_15s.jpg', 'path': './stimuli/distractors/volleyball_15s.jpg'},
    {'name': './stimuli/distractors/volleyball_08s.jpg', 'path': './stimuli/distractors/volleyball_08s.jpg'},
    {'name': './stimuli/distractors/needle_10n.jpg', 'path': './stimuli/distractors/needle_10n.jpg'},
    {'name': './stimuli/distractors/needle_09s.jpg', 'path': './stimuli/distractors/needle_09s.jpg'},
    {'name': './stimuli/182_2.jpg', 'path': './stimuli/182_2.jpg'},
    {'name': './stimuli/182_3.jpg', 'path': './stimuli/182_3.jpg'},
    {'name': './stimuli/182_1.jpg', 'path': './stimuli/182_1.jpg'},
    {'name': './stimuli/distractors/lion_19s.jpg', 'path': './stimuli/distractors/lion_19s.jpg'},
    {'name': './stimuli/distractors/lion_13s.jpg', 'path': './stimuli/distractors/lion_13s.jpg'},
    {'name': './stimuli/distractors/sword_08s.jpg', 'path': './stimuli/distractors/sword_08s.jpg'},
    {'name': './stimuli/distractors/sword_06s.jpg', 'path': './stimuli/distractors/sword_06s.jpg'},
    {'name': './stimuli/105_2.jpg', 'path': './stimuli/105_2.jpg'},
    {'name': './stimuli/105_3.jpg', 'path': './stimuli/105_3.jpg'},
    {'name': './stimuli/105_1.jpg', 'path': './stimuli/105_1.jpg'},
    {'name': './stimuli/distractors/gate_04s.jpg', 'path': './stimuli/distractors/gate_04s.jpg'},
    {'name': './stimuli/distractors/gate_03s.jpg', 'path': './stimuli/distractors/gate_03s.jpg'},
    {'name': './stimuli/distractors/filing_cabinet_08s.jpg', 'path': './stimuli/distractors/filing_cabinet_08s.jpg'},
    {'name': './stimuli/distractors/filing_cabinet_12s.jpg', 'path': './stimuli/distractors/filing_cabinet_12s.jpg'},
    {'name': './stimuli/245_2.jpg', 'path': './stimuli/245_2.jpg'},
    {'name': './stimuli/245_3.jpg', 'path': './stimuli/245_3.jpg'},
    {'name': './stimuli/245_1.jpg', 'path': './stimuli/245_1.jpg'},
    {'name': './stimuli/distractors/razor_blade_04s.jpg', 'path': './stimuli/distractors/razor_blade_04s.jpg'},
    {'name': './stimuli/distractors/razor_blade_08s.jpg', 'path': './stimuli/distractors/razor_blade_08s.jpg'},
    {'name': './stimuli/distractors/tiramisu_06s.jpg', 'path': './stimuli/distractors/tiramisu_06s.jpg'},
    {'name': './stimuli/distractors/tiramisu_01b.jpg', 'path': './stimuli/distractors/tiramisu_01b.jpg'},
    {'name': './stimuli/210_2.jpg', 'path': './stimuli/210_2.jpg'},
    {'name': './stimuli/210_3.jpg', 'path': './stimuli/210_3.jpg'},
    {'name': './stimuli/210_1.jpg', 'path': './stimuli/210_1.jpg'},
    {'name': './stimuli/distractors/casserole_04s.jpg', 'path': './stimuli/distractors/casserole_04s.jpg'},
    {'name': './stimuli/distractors/casserole_07s.jpg', 'path': './stimuli/distractors/casserole_07s.jpg'},
    {'name': './stimuli/distractors/gramophone_13n.jpg', 'path': './stimuli/distractors/gramophone_13n.jpg'},
    {'name': './stimuli/distractors/gramophone_06s.jpg', 'path': './stimuli/distractors/gramophone_06s.jpg'},
    {'name': './stimuli/279_2.jpg', 'path': './stimuli/279_2.jpg'},
    {'name': './stimuli/279_3.jpg', 'path': './stimuli/279_3.jpg'},
    {'name': './stimuli/279_1.jpg', 'path': './stimuli/279_1.jpg'},
    {'name': './stimuli/distractors/fence_13s.jpg', 'path': './stimuli/distractors/fence_13s.jpg'},
    {'name': './stimuli/distractors/fence_09s.jpg', 'path': './stimuli/distractors/fence_09s.jpg'},
    {'name': './stimuli/distractors/pita_05s.jpg', 'path': './stimuli/distractors/pita_05s.jpg'},
    {'name': './stimuli/distractors/pita_03s.jpg', 'path': './stimuli/distractors/pita_03s.jpg'},
    {'name': './stimuli/224_2.jpg', 'path': './stimuli/224_2.jpg'},
    {'name': './stimuli/224_3.jpg', 'path': './stimuli/224_3.jpg'},
    {'name': './stimuli/224_1.jpg', 'path': './stimuli/224_1.jpg'},
    {'name': './stimuli/distractors/drill_06s.jpg', 'path': './stimuli/distractors/drill_06s.jpg'},
    {'name': './stimuli/distractors/drill_01b.jpg', 'path': './stimuli/distractors/drill_01b.jpg'},
    {'name': './stimuli/distractors/can_opener_05s.jpg', 'path': './stimuli/distractors/can_opener_05s.jpg'},
    {'name': './stimuli/distractors/can_opener_11s.jpg', 'path': './stimuli/distractors/can_opener_11s.jpg'},
    {'name': './stimuli/123_2.jpg', 'path': './stimuli/123_2.jpg'},
    {'name': './stimuli/123_3.jpg', 'path': './stimuli/123_3.jpg'},
    {'name': './stimuli/123_1.jpg', 'path': './stimuli/123_1.jpg'},
    {'name': './stimuli/distractors/bee_13s.jpg', 'path': './stimuli/distractors/bee_13s.jpg'},
    {'name': './stimuli/distractors/bee_14s.jpg', 'path': './stimuli/distractors/bee_14s.jpg'},
    {'name': './stimuli/distractors/gargoyle_17s.jpg', 'path': './stimuli/distractors/gargoyle_17s.jpg'},
    {'name': './stimuli/distractors/gargoyle_04s.jpg', 'path': './stimuli/distractors/gargoyle_04s.jpg'},
    {'name': './stimuli/13_2.jpg', 'path': './stimuli/13_2.jpg'},
    {'name': './stimuli/13_3.jpg', 'path': './stimuli/13_3.jpg'},
    {'name': './stimuli/13_1.jpg', 'path': './stimuli/13_1.jpg'},
    {'name': './stimuli/distractors/bumper_02s.jpg', 'path': './stimuli/distractors/bumper_02s.jpg'},
    {'name': './stimuli/distractors/bumper_10s.jpg', 'path': './stimuli/distractors/bumper_10s.jpg'},
    {'name': './stimuli/distractors/key_09s.jpg', 'path': './stimuli/distractors/key_09s.jpg'},
    {'name': './stimuli/distractors/key_15s.jpg', 'path': './stimuli/distractors/key_15s.jpg'},
    {'name': './stimuli/249_2.jpg', 'path': './stimuli/249_2.jpg'},
    {'name': './stimuli/249_3.jpg', 'path': './stimuli/249_3.jpg'},
    {'name': './stimuli/249_1.jpg', 'path': './stimuli/249_1.jpg'},
    {'name': './stimuli/distractors/deodorant_07s.jpg', 'path': './stimuli/distractors/deodorant_07s.jpg'},
    {'name': './stimuli/distractors/deodorant_01b.jpg', 'path': './stimuli/distractors/deodorant_01b.jpg'},
    {'name': './stimuli/distractors/bike_22s.jpg', 'path': './stimuli/distractors/bike_22s.jpg'},
    {'name': './stimuli/distractors/bike_07s.jpg', 'path': './stimuli/distractors/bike_07s.jpg'},
    {'name': './stimuli/297_2.jpg', 'path': './stimuli/297_2.jpg'},
    {'name': './stimuli/297_3.jpg', 'path': './stimuli/297_3.jpg'},
    {'name': './stimuli/297_1.jpg', 'path': './stimuli/297_1.jpg'},
    {'name': './stimuli/distractors/stump_14s.jpg', 'path': './stimuli/distractors/stump_14s.jpg'},
    {'name': './stimuli/distractors/stump_07s.jpg', 'path': './stimuli/distractors/stump_07s.jpg'},
    {'name': './stimuli/distractors/baklava_03s.jpg', 'path': './stimuli/distractors/baklava_03s.jpg'},
    {'name': './stimuli/distractors/baklava_07s.jpg', 'path': './stimuli/distractors/baklava_07s.jpg'},
    {'name': './stimuli/243_2.jpg', 'path': './stimuli/243_2.jpg'},
    {'name': './stimuli/243_3.jpg', 'path': './stimuli/243_3.jpg'},
    {'name': './stimuli/243_1.jpg', 'path': './stimuli/243_1.jpg'},
    {'name': './stimuli/distractors/deer_14n.jpg', 'path': './stimuli/distractors/deer_14n.jpg'},
    {'name': './stimuli/distractors/deer_01b.jpg', 'path': './stimuli/distractors/deer_01b.jpg'},
    {'name': './stimuli/distractors/jetski_08s.jpg', 'path': './stimuli/distractors/jetski_08s.jpg'},
    {'name': './stimuli/distractors/jetski_14s.jpg', 'path': './stimuli/distractors/jetski_14s.jpg'},
    {'name': './stimuli/106_2.jpg', 'path': './stimuli/106_2.jpg'},
    {'name': './stimuli/106_3.jpg', 'path': './stimuli/106_3.jpg'},
    {'name': './stimuli/106_1.jpg', 'path': './stimuli/106_1.jpg'},
    {'name': './stimuli/distractors/smoothie_13s.jpg', 'path': './stimuli/distractors/smoothie_13s.jpg'},
    {'name': './stimuli/distractors/smoothie_09s.jpg', 'path': './stimuli/distractors/smoothie_09s.jpg'},
    {'name': './stimuli/distractors/cage_12s.jpg', 'path': './stimuli/distractors/cage_12s.jpg'},
    {'name': './stimuli/distractors/cage_11s.jpg', 'path': './stimuli/distractors/cage_11s.jpg'},
    {'name': './stimuli/291_2.jpg', 'path': './stimuli/291_2.jpg'},
    {'name': './stimuli/291_3.jpg', 'path': './stimuli/291_3.jpg'},
    {'name': './stimuli/291_1.jpg', 'path': './stimuli/291_1.jpg'},
    {'name': './stimuli/distractors/headlight_04s.jpg', 'path': './stimuli/distractors/headlight_04s.jpg'},
    {'name': './stimuli/distractors/headlight_08s.jpg', 'path': './stimuli/distractors/headlight_08s.jpg'},
    {'name': './stimuli/distractors/panda_14s.jpg', 'path': './stimuli/distractors/panda_14s.jpg'},
    {'name': './stimuli/distractors/panda_16s.jpg', 'path': './stimuli/distractors/panda_16s.jpg'},
    {'name': './stimuli/299_2.jpg', 'path': './stimuli/299_2.jpg'},
    {'name': './stimuli/299_3.jpg', 'path': './stimuli/299_3.jpg'},
    {'name': './stimuli/299_1.jpg', 'path': './stimuli/299_1.jpg'},
    {'name': './stimuli/distractors/barnacle_12n.jpg', 'path': './stimuli/distractors/barnacle_12n.jpg'},
    {'name': './stimuli/distractors/barnacle_01s.jpg', 'path': './stimuli/distractors/barnacle_01s.jpg'},
    {'name': './stimuli/distractors/drum_07s.jpg', 'path': './stimuli/distractors/drum_07s.jpg'},
    {'name': './stimuli/distractors/drum_13n.jpg', 'path': './stimuli/distractors/drum_13n.jpg'},
    {'name': './stimuli/192_2.jpg', 'path': './stimuli/192_2.jpg'},
    {'name': './stimuli/192_3.jpg', 'path': './stimuli/192_3.jpg'},
    {'name': './stimuli/192_1.jpg', 'path': './stimuli/192_1.jpg'},
    {'name': './stimuli/distractors/cilantro_07s.jpg', 'path': './stimuli/distractors/cilantro_07s.jpg'},
    {'name': './stimuli/distractors/cilantro_02s.jpg', 'path': './stimuli/distractors/cilantro_02s.jpg'},
    {'name': './stimuli/distractors/shield_05s.jpg', 'path': './stimuli/distractors/shield_05s.jpg'},
    {'name': './stimuli/distractors/shield_06s.jpg', 'path': './stimuli/distractors/shield_06s.jpg'},
    {'name': './stimuli/72_2.jpg', 'path': './stimuli/72_2.jpg'},
    {'name': './stimuli/72_3.jpg', 'path': './stimuli/72_3.jpg'},
    {'name': './stimuli/72_1.jpg', 'path': './stimuli/72_1.jpg'},
    {'name': './stimuli/distractors/ostrich_05s.jpg', 'path': './stimuli/distractors/ostrich_05s.jpg'},
    {'name': './stimuli/distractors/ostrich_08s.jpg', 'path': './stimuli/distractors/ostrich_08s.jpg'},
    {'name': './stimuli/distractors/magnifying_glass_06s.jpg', 'path': './stimuli/distractors/magnifying_glass_06s.jpg'},
    {'name': './stimuli/distractors/magnifying_glass_02s.jpg', 'path': './stimuli/distractors/magnifying_glass_02s.jpg'},
    {'name': './stimuli/64_2.jpg', 'path': './stimuli/64_2.jpg'},
    {'name': './stimuli/64_3.jpg', 'path': './stimuli/64_3.jpg'},
    {'name': './stimuli/64_1.jpg', 'path': './stimuli/64_1.jpg'},
    {'name': './stimuli/distractors/drum_06s.jpg', 'path': './stimuli/distractors/drum_06s.jpg'},
    {'name': './stimuli/distractors/drum_02s.jpg', 'path': './stimuli/distractors/drum_02s.jpg'},
    {'name': './stimuli/distractors/screen2_02s.jpg', 'path': './stimuli/distractors/screen2_02s.jpg'},
    {'name': './stimuli/distractors/screen2_12s.jpg', 'path': './stimuli/distractors/screen2_12s.jpg'},
    {'name': './stimuli/140_2.jpg', 'path': './stimuli/140_2.jpg'},
    {'name': './stimuli/140_3.jpg', 'path': './stimuli/140_3.jpg'},
    {'name': './stimuli/140_1.jpg', 'path': './stimuli/140_1.jpg'},
    {'name': './stimuli/distractors/toucan_03s.jpg', 'path': './stimuli/distractors/toucan_03s.jpg'},
    {'name': './stimuli/distractors/toucan_10s.jpg', 'path': './stimuli/distractors/toucan_10s.jpg'},
    {'name': './stimuli/distractors/arugula_10s.jpg', 'path': './stimuli/distractors/arugula_10s.jpg'},
    {'name': './stimuli/distractors/arugula_11s.jpg', 'path': './stimuli/distractors/arugula_11s.jpg'},
    {'name': './stimuli/77_2.jpg', 'path': './stimuli/77_2.jpg'},
    {'name': './stimuli/77_3.jpg', 'path': './stimuli/77_3.jpg'},
    {'name': './stimuli/77_1.jpg', 'path': './stimuli/77_1.jpg'},
    {'name': './stimuli/distractors/telephone_pole_08s.jpg', 'path': './stimuli/distractors/telephone_pole_08s.jpg'},
    {'name': './stimuli/distractors/telephone_pole_04s.jpg', 'path': './stimuli/distractors/telephone_pole_04s.jpg'},
    {'name': './stimuli/distractors/cheesecake_05s.jpg', 'path': './stimuli/distractors/cheesecake_05s.jpg'},
    {'name': './stimuli/distractors/cheesecake_15s.jpg', 'path': './stimuli/distractors/cheesecake_15s.jpg'},
    {'name': './stimuli/8_2.jpg', 'path': './stimuli/8_2.jpg'},
    {'name': './stimuli/8_3.jpg', 'path': './stimuli/8_3.jpg'},
    {'name': './stimuli/8_1.jpg', 'path': './stimuli/8_1.jpg'},
    {'name': './stimuli/distractors/stethoscope_11s.jpg', 'path': './stimuli/distractors/stethoscope_11s.jpg'},
    {'name': './stimuli/distractors/stethoscope_09n.jpg', 'path': './stimuli/distractors/stethoscope_09n.jpg'},
    {'name': './stimuli/distractors/pepper_mill_03s.jpg', 'path': './stimuli/distractors/pepper_mill_03s.jpg'},
    {'name': './stimuli/distractors/pepper_mill_02s.jpg', 'path': './stimuli/distractors/pepper_mill_02s.jpg'},
    {'name': './stimuli/263_2.jpg', 'path': './stimuli/263_2.jpg'},
    {'name': './stimuli/263_3.jpg', 'path': './stimuli/263_3.jpg'},
    {'name': './stimuli/263_1.jpg', 'path': './stimuli/263_1.jpg'},
    {'name': './stimuli/distractors/anteater_05s.jpg', 'path': './stimuli/distractors/anteater_05s.jpg'},
    {'name': './stimuli/distractors/anteater_07n.jpg', 'path': './stimuli/distractors/anteater_07n.jpg'},
    {'name': './stimuli/distractors/toast_09s.jpg', 'path': './stimuli/distractors/toast_09s.jpg'},
    {'name': './stimuli/distractors/toast_04s.jpg', 'path': './stimuli/distractors/toast_04s.jpg'},
    {'name': './stimuli/48_2.jpg', 'path': './stimuli/48_2.jpg'},
    {'name': './stimuli/48_3.jpg', 'path': './stimuli/48_3.jpg'},
    {'name': './stimuli/48_1.jpg', 'path': './stimuli/48_1.jpg'},
    {'name': './stimuli/distractors/boulder_16s.jpg', 'path': './stimuli/distractors/boulder_16s.jpg'},
    {'name': './stimuli/distractors/boulder_20s.jpg', 'path': './stimuli/distractors/boulder_20s.jpg'},
    {'name': './stimuli/distractors/domino_17s.jpg', 'path': './stimuli/distractors/domino_17s.jpg'},
    {'name': './stimuli/distractors/domino_06s.jpg', 'path': './stimuli/distractors/domino_06s.jpg'},
    {'name': './stimuli/23_2.jpg', 'path': './stimuli/23_2.jpg'},
    {'name': './stimuli/23_3.jpg', 'path': './stimuli/23_3.jpg'},
    {'name': './stimuli/23_1.jpg', 'path': './stimuli/23_1.jpg'},
    {'name': './stimuli/distractors/shower_cap_08s.jpg', 'path': './stimuli/distractors/shower_cap_08s.jpg'},
    {'name': './stimuli/distractors/shower_cap_02s.jpg', 'path': './stimuli/distractors/shower_cap_02s.jpg'},
    {'name': './stimuli/distractors/bongo_13s.jpg', 'path': './stimuli/distractors/bongo_13s.jpg'},
    {'name': './stimuli/distractors/bongo_14s.jpg', 'path': './stimuli/distractors/bongo_14s.jpg'},
    {'name': './stimuli/146_2.jpg', 'path': './stimuli/146_2.jpg'},
    {'name': './stimuli/146_3.jpg', 'path': './stimuli/146_3.jpg'},
    {'name': './stimuli/146_1.jpg', 'path': './stimuli/146_1.jpg'},
    {'name': './stimuli/distractors/alpaca_04s.jpg', 'path': './stimuli/distractors/alpaca_04s.jpg'},
    {'name': './stimuli/distractors/alpaca_15s.jpg', 'path': './stimuli/distractors/alpaca_15s.jpg'},
    {'name': './stimuli/distractors/beaker_03s.jpg', 'path': './stimuli/distractors/beaker_03s.jpg'},
    {'name': './stimuli/distractors/beaker_10s.jpg', 'path': './stimuli/distractors/beaker_10s.jpg'},
    {'name': './stimuli/20_2.jpg', 'path': './stimuli/20_2.jpg'},
    {'name': './stimuli/20_3.jpg', 'path': './stimuli/20_3.jpg'},
    {'name': './stimuli/20_1.jpg', 'path': './stimuli/20_1.jpg'},
    {'name': './stimuli/distractors/footbath_02s.jpg', 'path': './stimuli/distractors/footbath_02s.jpg'},
    {'name': './stimuli/distractors/footbath_09s.jpg', 'path': './stimuli/distractors/footbath_09s.jpg'},
    {'name': './stimuli/distractors/mulberry_03s.jpg', 'path': './stimuli/distractors/mulberry_03s.jpg'},
    {'name': './stimuli/distractors/mulberry_01b.jpg', 'path': './stimuli/distractors/mulberry_01b.jpg'},
    {'name': './stimuli/129_2.jpg', 'path': './stimuli/129_2.jpg'},
    {'name': './stimuli/129_3.jpg', 'path': './stimuli/129_3.jpg'},
    {'name': './stimuli/129_1.jpg', 'path': './stimuli/129_1.jpg'},
    {'name': './stimuli/distractors/curtain_10s.jpg', 'path': './stimuli/distractors/curtain_10s.jpg'},
    {'name': './stimuli/distractors/curtain_01b.jpg', 'path': './stimuli/distractors/curtain_01b.jpg'},
    {'name': './stimuli/distractors/juicer1_09s.jpg', 'path': './stimuli/distractors/juicer1_09s.jpg'},
    {'name': './stimuli/distractors/juicer1_10s.jpg', 'path': './stimuli/distractors/juicer1_10s.jpg'},
    {'name': './stimuli/274_2.jpg', 'path': './stimuli/274_2.jpg'},
    {'name': './stimuli/274_3.jpg', 'path': './stimuli/274_3.jpg'},
    {'name': './stimuli/274_1.jpg', 'path': './stimuli/274_1.jpg'},
    {'name': './stimuli/distractors/platypus_10n.jpg', 'path': './stimuli/distractors/platypus_10n.jpg'},
    {'name': './stimuli/distractors/platypus_07s.jpg', 'path': './stimuli/distractors/platypus_07s.jpg'},
    {'name': './stimuli/distractors/shoe_02s.jpg', 'path': './stimuli/distractors/shoe_02s.jpg'},
    {'name': './stimuli/distractors/shoe_05s.jpg', 'path': './stimuli/distractors/shoe_05s.jpg'},
    {'name': './stimuli/278_2.jpg', 'path': './stimuli/278_2.jpg'},
    {'name': './stimuli/278_3.jpg', 'path': './stimuli/278_3.jpg'},
    {'name': './stimuli/278_1.jpg', 'path': './stimuli/278_1.jpg'},
    {'name': './stimuli/distractors/bull_03s.jpg', 'path': './stimuli/distractors/bull_03s.jpg'},
    {'name': './stimuli/distractors/bull_12s.jpg', 'path': './stimuli/distractors/bull_12s.jpg'},
    {'name': './stimuli/distractors/juice_06s.jpg', 'path': './stimuli/distractors/juice_06s.jpg'},
    {'name': './stimuli/distractors/juice_03s.jpg', 'path': './stimuli/distractors/juice_03s.jpg'},
    {'name': './stimuli/169_2.jpg', 'path': './stimuli/169_2.jpg'},
    {'name': './stimuli/169_3.jpg', 'path': './stimuli/169_3.jpg'},
    {'name': './stimuli/169_1.jpg', 'path': './stimuli/169_1.jpg'},
    {'name': './stimuli/distractors/cuckoo_clock_11s.jpg', 'path': './stimuli/distractors/cuckoo_clock_11s.jpg'},
    {'name': './stimuli/distractors/cuckoo_clock_04s.jpg', 'path': './stimuli/distractors/cuckoo_clock_04s.jpg'},
    {'name': './stimuli/distractors/rose_02s.jpg', 'path': './stimuli/distractors/rose_02s.jpg'},
    {'name': './stimuli/distractors/rose_07s.jpg', 'path': './stimuli/distractors/rose_07s.jpg'},
    {'name': './stimuli/287_2.jpg', 'path': './stimuli/287_2.jpg'},
    {'name': './stimuli/287_3.jpg', 'path': './stimuli/287_3.jpg'},
    {'name': './stimuli/287_1.jpg', 'path': './stimuli/287_1.jpg'},
    {'name': './stimuli/distractors/grapevine_02s.jpg', 'path': './stimuli/distractors/grapevine_02s.jpg'},
    {'name': './stimuli/distractors/grapevine_09s.jpg', 'path': './stimuli/distractors/grapevine_09s.jpg'},
    {'name': './stimuli/distractors/trombone_08s.jpg', 'path': './stimuli/distractors/trombone_08s.jpg'},
    {'name': './stimuli/distractors/trombone_09s.jpg', 'path': './stimuli/distractors/trombone_09s.jpg'},
    {'name': './stimuli/280_2.jpg', 'path': './stimuli/280_2.jpg'},
    {'name': './stimuli/280_3.jpg', 'path': './stimuli/280_3.jpg'},
    {'name': './stimuli/280_1.jpg', 'path': './stimuli/280_1.jpg'},
    {'name': './stimuli/distractors/root_07s.jpg', 'path': './stimuli/distractors/root_07s.jpg'},
    {'name': './stimuli/distractors/root_06s.jpg', 'path': './stimuli/distractors/root_06s.jpg'},
    {'name': './stimuli/distractors/spam_09s.jpg', 'path': './stimuli/distractors/spam_09s.jpg'},
    {'name': './stimuli/distractors/spam_01b.jpg', 'path': './stimuli/distractors/spam_01b.jpg'},
    {'name': './stimuli/225_2.jpg', 'path': './stimuli/225_2.jpg'},
    {'name': './stimuli/225_3.jpg', 'path': './stimuli/225_3.jpg'},
    {'name': './stimuli/225_1.jpg', 'path': './stimuli/225_1.jpg'},
    {'name': './stimuli/distractors/icicle_12s.jpg', 'path': './stimuli/distractors/icicle_12s.jpg'},
    {'name': './stimuli/distractors/icicle_11s.jpg', 'path': './stimuli/distractors/icicle_11s.jpg'},
    {'name': './stimuli/distractors/coffee_table_13s.jpg', 'path': './stimuli/distractors/coffee_table_13s.jpg'},
    {'name': './stimuli/distractors/coffee_table_09s.jpg', 'path': './stimuli/distractors/coffee_table_09s.jpg'},
    {'name': './stimuli/111_2.jpg', 'path': './stimuli/111_2.jpg'},
    {'name': './stimuli/111_3.jpg', 'path': './stimuli/111_3.jpg'},
    {'name': './stimuli/111_1.jpg', 'path': './stimuli/111_1.jpg'},
    {'name': './stimuli/distractors/fossil_05s.jpg', 'path': './stimuli/distractors/fossil_05s.jpg'},
    {'name': './stimuli/distractors/fossil_10s.jpg', 'path': './stimuli/distractors/fossil_10s.jpg'},
    {'name': './stimuli/distractors/pumpkin_08s.jpg', 'path': './stimuli/distractors/pumpkin_08s.jpg'},
    {'name': './stimuli/distractors/pumpkin_21n.jpg', 'path': './stimuli/distractors/pumpkin_21n.jpg'},
    {'name': './stimuli/198_2.jpg', 'path': './stimuli/198_2.jpg'},
    {'name': './stimuli/198_3.jpg', 'path': './stimuli/198_3.jpg'},
    {'name': './stimuli/198_1.jpg', 'path': './stimuli/198_1.jpg'},
    {'name': './stimuli/distractors/platypus_13s.jpg', 'path': './stimuli/distractors/platypus_13s.jpg'},
    {'name': './stimuli/distractors/platypus_12s.jpg', 'path': './stimuli/distractors/platypus_12s.jpg'},
    {'name': './stimuli/distractors/siren_03s.jpg', 'path': './stimuli/distractors/siren_03s.jpg'},
    {'name': './stimuli/distractors/siren_12s.jpg', 'path': './stimuli/distractors/siren_12s.jpg'},
    {'name': './stimuli/171_2.jpg', 'path': './stimuli/171_2.jpg'},
    {'name': './stimuli/171_3.jpg', 'path': './stimuli/171_3.jpg'},
    {'name': './stimuli/171_1.jpg', 'path': './stimuli/171_1.jpg'},
    {'name': './stimuli/distractors/blimp_10s.jpg', 'path': './stimuli/distractors/blimp_10s.jpg'},
    {'name': './stimuli/distractors/blimp_05s.jpg', 'path': './stimuli/distractors/blimp_05s.jpg'},
    {'name': './stimuli/distractors/table_05s.jpg', 'path': './stimuli/distractors/table_05s.jpg'},
    {'name': './stimuli/distractors/table_04s.jpg', 'path': './stimuli/distractors/table_04s.jpg'},
    {'name': './stimuli/4_2.jpg', 'path': './stimuli/4_2.jpg'},
    {'name': './stimuli/4_3.jpg', 'path': './stimuli/4_3.jpg'},
    {'name': './stimuli/4_1.jpg', 'path': './stimuli/4_1.jpg'},
    {'name': './stimuli/distractors/hubcap_15s.jpg', 'path': './stimuli/distractors/hubcap_15s.jpg'},
    {'name': './stimuli/distractors/hubcap_03s.jpg', 'path': './stimuli/distractors/hubcap_03s.jpg'},
    {'name': './stimuli/distractors/camera2_07s.jpg', 'path': './stimuli/distractors/camera2_07s.jpg'},
    {'name': './stimuli/distractors/camera2_01b.jpg', 'path': './stimuli/distractors/camera2_01b.jpg'},
    {'name': './stimuli/282_2.jpg', 'path': './stimuli/282_2.jpg'},
    {'name': './stimuli/282_3.jpg', 'path': './stimuli/282_3.jpg'},
    {'name': './stimuli/282_1.jpg', 'path': './stimuli/282_1.jpg'},
    {'name': './stimuli/distractors/bobsled_08s.jpg', 'path': './stimuli/distractors/bobsled_08s.jpg'},
    {'name': './stimuli/distractors/bobsled_11s.jpg', 'path': './stimuli/distractors/bobsled_11s.jpg'},
    {'name': './stimuli/distractors/hail_02s.jpg', 'path': './stimuli/distractors/hail_02s.jpg'},
    {'name': './stimuli/distractors/hail_04s.jpg', 'path': './stimuli/distractors/hail_04s.jpg'},
    {'name': './stimuli/100_2.jpg', 'path': './stimuli/100_2.jpg'},
    {'name': './stimuli/100_3.jpg', 'path': './stimuli/100_3.jpg'},
    {'name': './stimuli/100_1.jpg', 'path': './stimuli/100_1.jpg'},
    {'name': './stimuli/distractors/fishhook_02s.jpg', 'path': './stimuli/distractors/fishhook_02s.jpg'},
    {'name': './stimuli/distractors/fishhook_10s.jpg', 'path': './stimuli/distractors/fishhook_10s.jpg'},
    {'name': './stimuli/distractors/sorbet_02s.jpg', 'path': './stimuli/distractors/sorbet_02s.jpg'},
    {'name': './stimuli/distractors/sorbet_10s.jpg', 'path': './stimuli/distractors/sorbet_10s.jpg'},
    {'name': './stimuli/78_2.jpg', 'path': './stimuli/78_2.jpg'},
    {'name': './stimuli/78_3.jpg', 'path': './stimuli/78_3.jpg'},
    {'name': './stimuli/78_1.jpg', 'path': './stimuli/78_1.jpg'},
    {'name': './stimuli/distractors/minivan_12s.jpg', 'path': './stimuli/distractors/minivan_12s.jpg'},
    {'name': './stimuli/distractors/minivan_04s.jpg', 'path': './stimuli/distractors/minivan_04s.jpg'},
    {'name': './stimuli/distractors/zucchini_08n.jpg', 'path': './stimuli/distractors/zucchini_08n.jpg'},
    {'name': './stimuli/distractors/zucchini_13s.jpg', 'path': './stimuli/distractors/zucchini_13s.jpg'},
    {'name': './stimuli/191_2.jpg', 'path': './stimuli/191_2.jpg'},
    {'name': './stimuli/191_3.jpg', 'path': './stimuli/191_3.jpg'},
    {'name': './stimuli/191_1.jpg', 'path': './stimuli/191_1.jpg'},
    {'name': './stimuli/distractors/carriage_04s.jpg', 'path': './stimuli/distractors/carriage_04s.jpg'},
    {'name': './stimuli/distractors/carriage_10s.jpg', 'path': './stimuli/distractors/carriage_10s.jpg'},
    {'name': './stimuli/distractors/thumb_08s.jpg', 'path': './stimuli/distractors/thumb_08s.jpg'},
    {'name': './stimuli/distractors/thumb_04s.jpg', 'path': './stimuli/distractors/thumb_04s.jpg'},
    {'name': './stimuli/104_2.jpg', 'path': './stimuli/104_2.jpg'},
    {'name': './stimuli/104_3.jpg', 'path': './stimuli/104_3.jpg'},
    {'name': './stimuli/104_1.jpg', 'path': './stimuli/104_1.jpg'},
    {'name': './stimuli/distractors/cockatoo_11s.jpg', 'path': './stimuli/distractors/cockatoo_11s.jpg'},
    {'name': './stimuli/distractors/cockatoo_04s.jpg', 'path': './stimuli/distractors/cockatoo_04s.jpg'},
    {'name': './stimuli/distractors/wire_cutters_06s.jpg', 'path': './stimuli/distractors/wire_cutters_06s.jpg'},
    {'name': './stimuli/distractors/wire_cutters_12s.jpg', 'path': './stimuli/distractors/wire_cutters_12s.jpg'},
    {'name': './stimuli/102_2.jpg', 'path': './stimuli/102_2.jpg'},
    {'name': './stimuli/102_3.jpg', 'path': './stimuli/102_3.jpg'},
    {'name': './stimuli/102_1.jpg', 'path': './stimuli/102_1.jpg'},
    {'name': './stimuli/distractors/neck_11s.jpg', 'path': './stimuli/distractors/neck_11s.jpg'},
    {'name': './stimuli/distractors/neck_02s.jpg', 'path': './stimuli/distractors/neck_02s.jpg'},
    {'name': './stimuli/distractors/triangle_11s.jpg', 'path': './stimuli/distractors/triangle_11s.jpg'},
    {'name': './stimuli/distractors/triangle_09s.jpg', 'path': './stimuli/distractors/triangle_09s.jpg'},
    {'name': './stimuli/256_2.jpg', 'path': './stimuli/256_2.jpg'},
    {'name': './stimuli/256_3.jpg', 'path': './stimuli/256_3.jpg'},
    {'name': './stimuli/256_1.jpg', 'path': './stimuli/256_1.jpg'},
    {'name': './stimuli/distractors/blimp_01b.jpg', 'path': './stimuli/distractors/blimp_01b.jpg'},
    {'name': './stimuli/distractors/blimp_02n.jpg', 'path': './stimuli/distractors/blimp_02n.jpg'},
    {'name': './stimuli/distractors/can_10s.jpg', 'path': './stimuli/distractors/can_10s.jpg'},
    {'name': './stimuli/distractors/can_06s.jpg', 'path': './stimuli/distractors/can_06s.jpg'},
    {'name': './stimuli/298_2.jpg', 'path': './stimuli/298_2.jpg'},
    {'name': './stimuli/298_3.jpg', 'path': './stimuli/298_3.jpg'},
    {'name': './stimuli/298_1.jpg', 'path': './stimuli/298_1.jpg'},
    {'name': './stimuli/distractors/fish_05s.jpg', 'path': './stimuli/distractors/fish_05s.jpg'},
    {'name': './stimuli/distractors/fish_01b.jpg', 'path': './stimuli/distractors/fish_01b.jpg'},
    {'name': './stimuli/distractors/train_car_05s.jpg', 'path': './stimuli/distractors/train_car_05s.jpg'},
    {'name': './stimuli/distractors/train_car_13s.jpg', 'path': './stimuli/distractors/train_car_13s.jpg'},
    {'name': './stimuli/184_2.jpg', 'path': './stimuli/184_2.jpg'},
    {'name': './stimuli/184_3.jpg', 'path': './stimuli/184_3.jpg'},
    {'name': './stimuli/184_1.jpg', 'path': './stimuli/184_1.jpg'},
    {'name': './stimuli/distractors/warthog_12s.jpg', 'path': './stimuli/distractors/warthog_12s.jpg'},
    {'name': './stimuli/distractors/warthog_05s.jpg', 'path': './stimuli/distractors/warthog_05s.jpg'},
    {'name': './stimuli/distractors/skirt_15s.jpg', 'path': './stimuli/distractors/skirt_15s.jpg'},
    {'name': './stimuli/distractors/skirt_11s.jpg', 'path': './stimuli/distractors/skirt_11s.jpg'},
    {'name': './stimuli/113_2.jpg', 'path': './stimuli/113_2.jpg'},
    {'name': './stimuli/113_3.jpg', 'path': './stimuli/113_3.jpg'},
    {'name': './stimuli/113_1.jpg', 'path': './stimuli/113_1.jpg'},
    {'name': './stimuli/distractors/cloak_14s.jpg', 'path': './stimuli/distractors/cloak_14s.jpg'},
    {'name': './stimuli/distractors/cloak_08s.jpg', 'path': './stimuli/distractors/cloak_08s.jpg'},
    {'name': './stimuli/distractors/tapestry_02s.jpg', 'path': './stimuli/distractors/tapestry_02s.jpg'},
    {'name': './stimuli/distractors/tapestry_13s.jpg', 'path': './stimuli/distractors/tapestry_13s.jpg'},
    {'name': './stimuli/270_2.jpg', 'path': './stimuli/270_2.jpg'},
    {'name': './stimuli/270_3.jpg', 'path': './stimuli/270_3.jpg'},
    {'name': './stimuli/270_1.jpg', 'path': './stimuli/270_1.jpg'},
    {'name': './stimuli/distractors/humvee_15s.jpg', 'path': './stimuli/distractors/humvee_15s.jpg'},
    {'name': './stimuli/distractors/humvee_14s.jpg', 'path': './stimuli/distractors/humvee_14s.jpg'},
    {'name': './stimuli/distractors/lemonade_09s.jpg', 'path': './stimuli/distractors/lemonade_09s.jpg'},
    {'name': './stimuli/distractors/lemonade_13s.jpg', 'path': './stimuli/distractors/lemonade_13s.jpg'},
    {'name': './stimuli/227_2.jpg', 'path': './stimuli/227_2.jpg'},
    {'name': './stimuli/227_3.jpg', 'path': './stimuli/227_3.jpg'},
    {'name': './stimuli/227_1.jpg', 'path': './stimuli/227_1.jpg'},
    {'name': './stimuli/distractors/lip_balm_11s.jpg', 'path': './stimuli/distractors/lip_balm_11s.jpg'},
    {'name': './stimuli/distractors/lip_balm_12s.jpg', 'path': './stimuli/distractors/lip_balm_12s.jpg'},
    {'name': './stimuli/distractors/piglet_11s.jpg', 'path': './stimuli/distractors/piglet_11s.jpg'},
    {'name': './stimuli/distractors/piglet_05s.jpg', 'path': './stimuli/distractors/piglet_05s.jpg'},
    {'name': './stimuli/112_2.jpg', 'path': './stimuli/112_2.jpg'},
    {'name': './stimuli/112_3.jpg', 'path': './stimuli/112_3.jpg'},
    {'name': './stimuli/112_1.jpg', 'path': './stimuli/112_1.jpg'},
    {'name': './stimuli/distractors/cummerbund_16s.jpg', 'path': './stimuli/distractors/cummerbund_16s.jpg'},
    {'name': './stimuli/distractors/cummerbund_01b.jpg', 'path': './stimuli/distractors/cummerbund_01b.jpg'},
    {'name': './stimuli/distractors/dishwashing_liquid_12s.jpg', 'path': './stimuli/distractors/dishwashing_liquid_12s.jpg'},
    {'name': './stimuli/distractors/dishwashing_liquid_07s.jpg', 'path': './stimuli/distractors/dishwashing_liquid_07s.jpg'},
    {'name': './stimuli/16_2.jpg', 'path': './stimuli/16_2.jpg'},
    {'name': './stimuli/16_3.jpg', 'path': './stimuli/16_3.jpg'},
    {'name': './stimuli/16_1.jpg', 'path': './stimuli/16_1.jpg'},
    {'name': './stimuli/distractors/speedboat_03s.jpg', 'path': './stimuli/distractors/speedboat_03s.jpg'},
    {'name': './stimuli/distractors/speedboat_12s.jpg', 'path': './stimuli/distractors/speedboat_12s.jpg'},
    {'name': './stimuli/distractors/bull_07s.jpg', 'path': './stimuli/distractors/bull_07s.jpg'},
    {'name': './stimuli/distractors/bull_02s.jpg', 'path': './stimuli/distractors/bull_02s.jpg'},
    {'name': './stimuli/82_2.jpg', 'path': './stimuli/82_2.jpg'},
    {'name': './stimuli/82_3.jpg', 'path': './stimuli/82_3.jpg'},
    {'name': './stimuli/82_1.jpg', 'path': './stimuli/82_1.jpg'},
    {'name': './stimuli/distractors/antenna_04n.jpg', 'path': './stimuli/distractors/antenna_04n.jpg'},
    {'name': './stimuli/distractors/antenna_02s.jpg', 'path': './stimuli/distractors/antenna_02s.jpg'},
    {'name': './stimuli/distractors/ready_meal_08s.jpg', 'path': './stimuli/distractors/ready_meal_08s.jpg'},
    {'name': './stimuli/distractors/ready_meal_02s.jpg', 'path': './stimuli/distractors/ready_meal_02s.jpg'},
    {'name': './stimuli/272_2.jpg', 'path': './stimuli/272_2.jpg'},
    {'name': './stimuli/272_3.jpg', 'path': './stimuli/272_3.jpg'},
    {'name': './stimuli/272_1.jpg', 'path': './stimuli/272_1.jpg'},
    {'name': './stimuli/distractors/panda_03s.jpg', 'path': './stimuli/distractors/panda_03s.jpg'},
    {'name': './stimuli/distractors/panda_17s.jpg', 'path': './stimuli/distractors/panda_17s.jpg'},
    {'name': './stimuli/distractors/drink_03s.jpg', 'path': './stimuli/distractors/drink_03s.jpg'},
    {'name': './stimuli/distractors/drink_12s.jpg', 'path': './stimuli/distractors/drink_12s.jpg'},
    {'name': './stimuli/28_2.jpg', 'path': './stimuli/28_2.jpg'},
    {'name': './stimuli/28_3.jpg', 'path': './stimuli/28_3.jpg'},
    {'name': './stimuli/28_1.jpg', 'path': './stimuli/28_1.jpg'},
    {'name': './stimuli/distractors/chip_03s.jpg', 'path': './stimuli/distractors/chip_03s.jpg'},
    {'name': './stimuli/distractors/chip_05s.jpg', 'path': './stimuli/distractors/chip_05s.jpg'},
    {'name': './stimuli/distractors/caviar_03s.jpg', 'path': './stimuli/distractors/caviar_03s.jpg'},
    {'name': './stimuli/distractors/caviar_02s.jpg', 'path': './stimuli/distractors/caviar_02s.jpg'},
    {'name': './stimuli/122_2.jpg', 'path': './stimuli/122_2.jpg'},
    {'name': './stimuli/122_3.jpg', 'path': './stimuli/122_3.jpg'},
    {'name': './stimuli/122_1.jpg', 'path': './stimuli/122_1.jpg'},
    {'name': './stimuli/distractors/weather_vane_06s.jpg', 'path': './stimuli/distractors/weather_vane_06s.jpg'},
    {'name': './stimuli/distractors/weather_vane_14s.jpg', 'path': './stimuli/distractors/weather_vane_14s.jpg'},
    {'name': './stimuli/distractors/refrigerator_04s.jpg', 'path': './stimuli/distractors/refrigerator_04s.jpg'},
    {'name': './stimuli/distractors/refrigerator_07s.jpg', 'path': './stimuli/distractors/refrigerator_07s.jpg'},
    {'name': './stimuli/265_2.jpg', 'path': './stimuli/265_2.jpg'},
    {'name': './stimuli/265_3.jpg', 'path': './stimuli/265_3.jpg'},
    {'name': './stimuli/265_1.jpg', 'path': './stimuli/265_1.jpg'},
    {'name': './stimuli/distractors/tumbleweed_01b.jpg', 'path': './stimuli/distractors/tumbleweed_01b.jpg'},
    {'name': './stimuli/distractors/tumbleweed_02n.jpg', 'path': './stimuli/distractors/tumbleweed_02n.jpg'},
    {'name': './stimuli/distractors/hot_tub_02s.jpg', 'path': './stimuli/distractors/hot_tub_02s.jpg'},
    {'name': './stimuli/distractors/hot_tub_11s.jpg', 'path': './stimuli/distractors/hot_tub_11s.jpg'},
    {'name': './stimuli/180_2.jpg', 'path': './stimuli/180_2.jpg'},
    {'name': './stimuli/180_3.jpg', 'path': './stimuli/180_3.jpg'},
    {'name': './stimuli/180_1.jpg', 'path': './stimuli/180_1.jpg'},
    {'name': './stimuli/distractors/cloak_12s.jpg', 'path': './stimuli/distractors/cloak_12s.jpg'},
    {'name': './stimuli/distractors/cloak_03s.jpg', 'path': './stimuli/distractors/cloak_03s.jpg'},
    {'name': './stimuli/distractors/lasagna_02s.jpg', 'path': './stimuli/distractors/lasagna_02s.jpg'},
    {'name': './stimuli/distractors/lasagna_12s.jpg', 'path': './stimuli/distractors/lasagna_12s.jpg'},
    {'name': './stimuli/84_2.jpg', 'path': './stimuli/84_2.jpg'},
    {'name': './stimuli/84_3.jpg', 'path': './stimuli/84_3.jpg'},
    {'name': './stimuli/84_1.jpg', 'path': './stimuli/84_1.jpg'},
    {'name': './stimuli/distractors/grape_14s.jpg', 'path': './stimuli/distractors/grape_14s.jpg'},
    {'name': './stimuli/distractors/grape_19s.jpg', 'path': './stimuli/distractors/grape_19s.jpg'},
    {'name': './stimuli/distractors/baby_01b.jpg', 'path': './stimuli/distractors/baby_01b.jpg'},
    {'name': './stimuli/distractors/baby_21s.jpg', 'path': './stimuli/distractors/baby_21s.jpg'},
    {'name': './stimuli/246_2.jpg', 'path': './stimuli/246_2.jpg'},
    {'name': './stimuli/246_3.jpg', 'path': './stimuli/246_3.jpg'},
    {'name': './stimuli/246_1.jpg', 'path': './stimuli/246_1.jpg'},
    {'name': './stimuli/distractors/vulture_15s.jpg', 'path': './stimuli/distractors/vulture_15s.jpg'},
    {'name': './stimuli/distractors/vulture_14s.jpg', 'path': './stimuli/distractors/vulture_14s.jpg'},
    {'name': './stimuli/distractors/gravel_05n.jpg', 'path': './stimuli/distractors/gravel_05n.jpg'},
    {'name': './stimuli/distractors/gravel_04n.jpg', 'path': './stimuli/distractors/gravel_04n.jpg'},
    {'name': './stimuli/89_2.jpg', 'path': './stimuli/89_2.jpg'},
    {'name': './stimuli/89_3.jpg', 'path': './stimuli/89_3.jpg'},
    {'name': './stimuli/89_1.jpg', 'path': './stimuli/89_1.jpg'},
    {'name': './stimuli/distractors/gate_05s.jpg', 'path': './stimuli/distractors/gate_05s.jpg'},
    {'name': './stimuli/distractors/gate_08s.jpg', 'path': './stimuli/distractors/gate_08s.jpg'},
    {'name': './stimuli/distractors/grapefruit_10s.jpg', 'path': './stimuli/distractors/grapefruit_10s.jpg'},
    {'name': './stimuli/distractors/grapefruit_07s.jpg', 'path': './stimuli/distractors/grapefruit_07s.jpg'},
    {'name': './stimuli/152_2.jpg', 'path': './stimuli/152_2.jpg'},
    {'name': './stimuli/152_3.jpg', 'path': './stimuli/152_3.jpg'},
    {'name': './stimuli/152_1.jpg', 'path': './stimuli/152_1.jpg'},
    {'name': './stimuli/distractors/birdhouse_06s.jpg', 'path': './stimuli/distractors/birdhouse_06s.jpg'},
    {'name': './stimuli/distractors/birdhouse_09s.jpg', 'path': './stimuli/distractors/birdhouse_09s.jpg'},
    {'name': './stimuli/distractors/ladybug_12s.jpg', 'path': './stimuli/distractors/ladybug_12s.jpg'},
    {'name': './stimuli/distractors/ladybug_04s.jpg', 'path': './stimuli/distractors/ladybug_04s.jpg'},
    {'name': './stimuli/17_2.jpg', 'path': './stimuli/17_2.jpg'},
    {'name': './stimuli/17_3.jpg', 'path': './stimuli/17_3.jpg'},
    {'name': './stimuli/17_1.jpg', 'path': './stimuli/17_1.jpg'},
    {'name': './stimuli/distractors/kite_05s.jpg', 'path': './stimuli/distractors/kite_05s.jpg'},
    {'name': './stimuli/distractors/kite_07s.jpg', 'path': './stimuli/distractors/kite_07s.jpg'},
    {'name': './stimuli/distractors/blazer_13s.jpg', 'path': './stimuli/distractors/blazer_13s.jpg'},
    {'name': './stimuli/distractors/blazer_12s.jpg', 'path': './stimuli/distractors/blazer_12s.jpg'},
    {'name': './stimuli/1_2.jpg', 'path': './stimuli/1_2.jpg'},
    {'name': './stimuli/1_3.jpg', 'path': './stimuli/1_3.jpg'},
    {'name': './stimuli/1_1.jpg', 'path': './stimuli/1_1.jpg'},
    {'name': './stimuli/distractors/sardine_08s.jpg', 'path': './stimuli/distractors/sardine_08s.jpg'},
    {'name': './stimuli/distractors/sardine_05s.jpg', 'path': './stimuli/distractors/sardine_05s.jpg'},
    {'name': './stimuli/distractors/mask_10s.jpg', 'path': './stimuli/distractors/mask_10s.jpg'},
    {'name': './stimuli/distractors/mask_07s.jpg', 'path': './stimuli/distractors/mask_07s.jpg'},
    {'name': './stimuli/131_2.jpg', 'path': './stimuli/131_2.jpg'},
    {'name': './stimuli/131_3.jpg', 'path': './stimuli/131_3.jpg'},
    {'name': './stimuli/131_1.jpg', 'path': './stimuli/131_1.jpg'},
    {'name': './stimuli/distractors/backpack_02s.jpg', 'path': './stimuli/distractors/backpack_02s.jpg'},
    {'name': './stimuli/distractors/backpack_08s.jpg', 'path': './stimuli/distractors/backpack_08s.jpg'},
    {'name': './stimuli/distractors/gingerbread_man_06s.jpg', 'path': './stimuli/distractors/gingerbread_man_06s.jpg'},
    {'name': './stimuli/distractors/gingerbread_man_09s.jpg', 'path': './stimuli/distractors/gingerbread_man_09s.jpg'},
    {'name': './stimuli/87_2.jpg', 'path': './stimuli/87_2.jpg'},
    {'name': './stimuli/87_3.jpg', 'path': './stimuli/87_3.jpg'},
    {'name': './stimuli/87_1.jpg', 'path': './stimuli/87_1.jpg'},
    {'name': './stimuli/distractors/peacock_02s.jpg', 'path': './stimuli/distractors/peacock_02s.jpg'},
    {'name': './stimuli/distractors/peacock_11s.jpg', 'path': './stimuli/distractors/peacock_11s.jpg'},
    {'name': './stimuli/distractors/headphones_03s.jpg', 'path': './stimuli/distractors/headphones_03s.jpg'},
    {'name': './stimuli/distractors/headphones_01b.jpg', 'path': './stimuli/distractors/headphones_01b.jpg'},
    {'name': './stimuli/253_2.jpg', 'path': './stimuli/253_2.jpg'},
    {'name': './stimuli/253_3.jpg', 'path': './stimuli/253_3.jpg'},
    {'name': './stimuli/253_1.jpg', 'path': './stimuli/253_1.jpg'},
    {'name': './stimuli/distractors/butterfly_08s.jpg', 'path': './stimuli/distractors/butterfly_08s.jpg'},
    {'name': './stimuli/distractors/butterfly_06s.jpg', 'path': './stimuli/distractors/butterfly_06s.jpg'},
    {'name': './stimuli/distractors/grate_09s.jpg', 'path': './stimuli/distractors/grate_09s.jpg'},
    {'name': './stimuli/distractors/grate_14s.jpg', 'path': './stimuli/distractors/grate_14s.jpg'},
    {'name': './stimuli/208_2.jpg', 'path': './stimuli/208_2.jpg'},
    {'name': './stimuli/208_3.jpg', 'path': './stimuli/208_3.jpg'},
    {'name': './stimuli/208_1.jpg', 'path': './stimuli/208_1.jpg'},
    {'name': './stimuli/distractors/polo_shirt_02s.jpg', 'path': './stimuli/distractors/polo_shirt_02s.jpg'},
    {'name': './stimuli/distractors/polo_shirt_09s.jpg', 'path': './stimuli/distractors/polo_shirt_09s.jpg'},
    {'name': './stimuli/distractors/ice_cube_01b.jpg', 'path': './stimuli/distractors/ice_cube_01b.jpg'},
    {'name': './stimuli/distractors/ice_cube_09s.jpg', 'path': './stimuli/distractors/ice_cube_09s.jpg'},
    {'name': './stimuli/290_2.jpg', 'path': './stimuli/290_2.jpg'},
    {'name': './stimuli/290_3.jpg', 'path': './stimuli/290_3.jpg'},
    {'name': './stimuli/290_1.jpg', 'path': './stimuli/290_1.jpg'},
    {'name': './stimuli/distractors/kimono_11s.jpg', 'path': './stimuli/distractors/kimono_11s.jpg'},
    {'name': './stimuli/distractors/kimono_14s.jpg', 'path': './stimuli/distractors/kimono_14s.jpg'},
    {'name': './stimuli/distractors/cocoon_10s.jpg', 'path': './stimuli/distractors/cocoon_10s.jpg'},
    {'name': './stimuli/distractors/cocoon_09s.jpg', 'path': './stimuli/distractors/cocoon_09s.jpg'},
    {'name': './stimuli/168_2.jpg', 'path': './stimuli/168_2.jpg'},
    {'name': './stimuli/168_3.jpg', 'path': './stimuli/168_3.jpg'},
    {'name': './stimuli/168_1.jpg', 'path': './stimuli/168_1.jpg'},
    {'name': './stimuli/distractors/door_10s.jpg', 'path': './stimuli/distractors/door_10s.jpg'},
    {'name': './stimuli/distractors/door_03s.jpg', 'path': './stimuli/distractors/door_03s.jpg'},
    {'name': './stimuli/distractors/turban_05s.jpg', 'path': './stimuli/distractors/turban_05s.jpg'},
    {'name': './stimuli/distractors/turban_09s.jpg', 'path': './stimuli/distractors/turban_09s.jpg'},
    {'name': './stimuli/7_2.jpg', 'path': './stimuli/7_2.jpg'},
    {'name': './stimuli/7_3.jpg', 'path': './stimuli/7_3.jpg'},
    {'name': './stimuli/7_1.jpg', 'path': './stimuli/7_1.jpg'},
    {'name': './stimuli/distractors/roller_coaster_11s.jpg', 'path': './stimuli/distractors/roller_coaster_11s.jpg'},
    {'name': './stimuli/distractors/roller_coaster_05s.jpg', 'path': './stimuli/distractors/roller_coaster_05s.jpg'},
    {'name': './stimuli/distractors/potpie_17s.jpg', 'path': './stimuli/distractors/potpie_17s.jpg'},
    {'name': './stimuli/distractors/potpie_07s.jpg', 'path': './stimuli/distractors/potpie_07s.jpg'},
    {'name': './stimuli/125_2.jpg', 'path': './stimuli/125_2.jpg'},
    {'name': './stimuli/125_3.jpg', 'path': './stimuli/125_3.jpg'},
    {'name': './stimuli/125_1.jpg', 'path': './stimuli/125_1.jpg'},
    {'name': './stimuli/distractors/seagull_04s.jpg', 'path': './stimuli/distractors/seagull_04s.jpg'},
    {'name': './stimuli/distractors/seagull_12s.jpg', 'path': './stimuli/distractors/seagull_12s.jpg'},
    {'name': './stimuli/distractors/dumpster_13s.jpg', 'path': './stimuli/distractors/dumpster_13s.jpg'},
    {'name': './stimuli/distractors/dumpster_03s.jpg', 'path': './stimuli/distractors/dumpster_03s.jpg'},
    {'name': './stimuli/25_2.jpg', 'path': './stimuli/25_2.jpg'},
    {'name': './stimuli/25_3.jpg', 'path': './stimuli/25_3.jpg'},
    {'name': './stimuli/25_1.jpg', 'path': './stimuli/25_1.jpg'},
    {'name': './stimuli/distractors/stockings_03s.jpg', 'path': './stimuli/distractors/stockings_03s.jpg'},
    {'name': './stimuli/distractors/stockings_04s.jpg', 'path': './stimuli/distractors/stockings_04s.jpg'},
    {'name': './stimuli/distractors/string_cheese_02s.jpg', 'path': './stimuli/distractors/string_cheese_02s.jpg'},
    {'name': './stimuli/distractors/string_cheese_03s.jpg', 'path': './stimuli/distractors/string_cheese_03s.jpg'},
    {'name': './stimuli/248_2.jpg', 'path': './stimuli/248_2.jpg'},
    {'name': './stimuli/248_3.jpg', 'path': './stimuli/248_3.jpg'},
    {'name': './stimuli/248_1.jpg', 'path': './stimuli/248_1.jpg'},
    {'name': './stimuli/distractors/earwig_14n.jpg', 'path': './stimuli/distractors/earwig_14n.jpg'},
    {'name': './stimuli/distractors/earwig_02s.jpg', 'path': './stimuli/distractors/earwig_02s.jpg'},
    {'name': './stimuli/distractors/popsicle_07s.jpg', 'path': './stimuli/distractors/popsicle_07s.jpg'},
    {'name': './stimuli/distractors/popsicle_03s.jpg', 'path': './stimuli/distractors/popsicle_03s.jpg'},
    {'name': './stimuli/159_2.jpg', 'path': './stimuli/159_2.jpg'},
    {'name': './stimuli/159_3.jpg', 'path': './stimuli/159_3.jpg'},
    {'name': './stimuli/159_1.jpg', 'path': './stimuli/159_1.jpg'},
    {'name': './stimuli/distractors/wasp_09n.jpg', 'path': './stimuli/distractors/wasp_09n.jpg'},
    {'name': './stimuli/distractors/wasp_14s.jpg', 'path': './stimuli/distractors/wasp_14s.jpg'},
    {'name': './stimuli/distractors/sweatsuit_04s.jpg', 'path': './stimuli/distractors/sweatsuit_04s.jpg'},
    {'name': './stimuli/distractors/sweatsuit_06s.jpg', 'path': './stimuli/distractors/sweatsuit_06s.jpg'},
    {'name': './stimuli/26_2.jpg', 'path': './stimuli/26_2.jpg'},
    {'name': './stimuli/26_3.jpg', 'path': './stimuli/26_3.jpg'},
    {'name': './stimuli/26_1.jpg', 'path': './stimuli/26_1.jpg'},
    {'name': './stimuli/distractors/ferret_10s.jpg', 'path': './stimuli/distractors/ferret_10s.jpg'},
    {'name': './stimuli/distractors/ferret_03s.jpg', 'path': './stimuli/distractors/ferret_03s.jpg'},
    {'name': './stimuli/distractors/hook1_05s.jpg', 'path': './stimuli/distractors/hook1_05s.jpg'},
    {'name': './stimuli/distractors/hook1_11s.jpg', 'path': './stimuli/distractors/hook1_11s.jpg'},
    {'name': './stimuli/119_2.jpg', 'path': './stimuli/119_2.jpg'},
    {'name': './stimuli/119_3.jpg', 'path': './stimuli/119_3.jpg'},
    {'name': './stimuli/119_1.jpg', 'path': './stimuli/119_1.jpg'},
    {'name': './stimuli/distractors/keg_03s.jpg', 'path': './stimuli/distractors/keg_03s.jpg'},
    {'name': './stimuli/distractors/keg_06s.jpg', 'path': './stimuli/distractors/keg_06s.jpg'},
    {'name': './stimuli/distractors/metronome_05s.jpg', 'path': './stimuli/distractors/metronome_05s.jpg'},
    {'name': './stimuli/distractors/metronome_07s.jpg', 'path': './stimuli/distractors/metronome_07s.jpg'},
    {'name': './stimuli/0_2.jpg', 'path': './stimuli/0_2.jpg'},
    {'name': './stimuli/0_3.jpg', 'path': './stimuli/0_3.jpg'},
    {'name': './stimuli/0_1.jpg', 'path': './stimuli/0_1.jpg'},
    {'name': './stimuli/distractors/pajamas_06s.jpg', 'path': './stimuli/distractors/pajamas_06s.jpg'},
    {'name': './stimuli/distractors/pajamas_13s.jpg', 'path': './stimuli/distractors/pajamas_13s.jpg'},
    {'name': './stimuli/distractors/javelin_11s.jpg', 'path': './stimuli/distractors/javelin_11s.jpg'},
    {'name': './stimuli/distractors/javelin_08s.jpg', 'path': './stimuli/distractors/javelin_08s.jpg'},
    {'name': './stimuli/109_2.jpg', 'path': './stimuli/109_2.jpg'},
    {'name': './stimuli/109_3.jpg', 'path': './stimuli/109_3.jpg'},
    {'name': './stimuli/109_1.jpg', 'path': './stimuli/109_1.jpg'},
    {'name': './stimuli/distractors/egg_15s.jpg', 'path': './stimuli/distractors/egg_15s.jpg'},
    {'name': './stimuli/distractors/egg_08s.jpg', 'path': './stimuli/distractors/egg_08s.jpg'},
    {'name': './stimuli/distractors/cow_12s.jpg', 'path': './stimuli/distractors/cow_12s.jpg'},
    {'name': './stimuli/distractors/cow_13n.jpg', 'path': './stimuli/distractors/cow_13n.jpg'},
    {'name': './stimuli/63_2.jpg', 'path': './stimuli/63_2.jpg'},
    {'name': './stimuli/63_3.jpg', 'path': './stimuli/63_3.jpg'},
    {'name': './stimuli/63_1.jpg', 'path': './stimuli/63_1.jpg'},
    {'name': './stimuli/distractors/mattress_03s.jpg', 'path': './stimuli/distractors/mattress_03s.jpg'},
    {'name': './stimuli/distractors/mattress_01s.jpg', 'path': './stimuli/distractors/mattress_01s.jpg'},
    {'name': './stimuli/distractors/reindeer_01b.jpg', 'path': './stimuli/distractors/reindeer_01b.jpg'},
    {'name': './stimuli/distractors/reindeer_04s.jpg', 'path': './stimuli/distractors/reindeer_04s.jpg'},
    {'name': './stimuli/21_2.jpg', 'path': './stimuli/21_2.jpg'},
    {'name': './stimuli/21_3.jpg', 'path': './stimuli/21_3.jpg'},
    {'name': './stimuli/21_1.jpg', 'path': './stimuli/21_1.jpg'},
    {'name': './stimuli/distractors/hood_01b.jpg', 'path': './stimuli/distractors/hood_01b.jpg'},
    {'name': './stimuli/distractors/hood_04s.jpg', 'path': './stimuli/distractors/hood_04s.jpg'},
    {'name': './stimuli/distractors/gauze_02s.jpg', 'path': './stimuli/distractors/gauze_02s.jpg'},
    {'name': './stimuli/distractors/gauze_10s.jpg', 'path': './stimuli/distractors/gauze_10s.jpg'},
    {'name': './stimuli/218_2.jpg', 'path': './stimuli/218_2.jpg'},
    {'name': './stimuli/218_3.jpg', 'path': './stimuli/218_3.jpg'},
    {'name': './stimuli/218_1.jpg', 'path': './stimuli/218_1.jpg'},
    {'name': './stimuli/distractors/tape_recorder_05s.jpg', 'path': './stimuli/distractors/tape_recorder_05s.jpg'},
    {'name': './stimuli/distractors/tape_recorder_04s.jpg', 'path': './stimuli/distractors/tape_recorder_04s.jpg'},
    {'name': './stimuli/distractors/fern_09n.jpg', 'path': './stimuli/distractors/fern_09n.jpg'},
    {'name': './stimuli/distractors/fern_02n.jpg', 'path': './stimuli/distractors/fern_02n.jpg'},
    {'name': './stimuli/127_2.jpg', 'path': './stimuli/127_2.jpg'},
    {'name': './stimuli/127_3.jpg', 'path': './stimuli/127_3.jpg'},
    {'name': './stimuli/127_1.jpg', 'path': './stimuli/127_1.jpg'},
    {'name': './stimuli/distractors/windshield_03s.jpg', 'path': './stimuli/distractors/windshield_03s.jpg'},
    {'name': './stimuli/distractors/windshield_01b.jpg', 'path': './stimuli/distractors/windshield_01b.jpg'},
    {'name': './stimuli/distractors/wedding_cake_01b.jpg', 'path': './stimuli/distractors/wedding_cake_01b.jpg'},
    {'name': './stimuli/distractors/wedding_cake_14s.jpg', 'path': './stimuli/distractors/wedding_cake_14s.jpg'},
    {'name': './stimuli/158_2.jpg', 'path': './stimuli/158_2.jpg'},
    {'name': './stimuli/158_3.jpg', 'path': './stimuli/158_3.jpg'},
    {'name': './stimuli/158_1.jpg', 'path': './stimuli/158_1.jpg'},
    {'name': './stimuli/distractors/hammock_11s.jpg', 'path': './stimuli/distractors/hammock_11s.jpg'},
    {'name': './stimuli/distractors/hammock_09s.jpg', 'path': './stimuli/distractors/hammock_09s.jpg'},
    {'name': './stimuli/distractors/icepick_08s.jpg', 'path': './stimuli/distractors/icepick_08s.jpg'},
    {'name': './stimuli/distractors/icepick_01b.jpg', 'path': './stimuli/distractors/icepick_01b.jpg'},
    {'name': './stimuli/174_2.jpg', 'path': './stimuli/174_2.jpg'},
    {'name': './stimuli/174_3.jpg', 'path': './stimuli/174_3.jpg'},
    {'name': './stimuli/174_1.jpg', 'path': './stimuli/174_1.jpg'},
    {'name': './stimuli/distractors/doorstop_14s.jpg', 'path': './stimuli/distractors/doorstop_14s.jpg'},
    {'name': './stimuli/distractors/doorstop_12s.jpg', 'path': './stimuli/distractors/doorstop_12s.jpg'},
    {'name': './stimuli/distractors/flamingo_14s.jpg', 'path': './stimuli/distractors/flamingo_14s.jpg'},
    {'name': './stimuli/distractors/flamingo_02s.jpg', 'path': './stimuli/distractors/flamingo_02s.jpg'},
    {'name': './stimuli/10_2.jpg', 'path': './stimuli/10_2.jpg'},
    {'name': './stimuli/10_3.jpg', 'path': './stimuli/10_3.jpg'},
    {'name': './stimuli/10_1.jpg', 'path': './stimuli/10_1.jpg'},
    {'name': './stimuli/distractors/fox_03s.jpg', 'path': './stimuli/distractors/fox_03s.jpg'},
    {'name': './stimuli/distractors/fox_12s.jpg', 'path': './stimuli/distractors/fox_12s.jpg'},
    {'name': './stimuli/distractors/briefcase_03s.jpg', 'path': './stimuli/distractors/briefcase_03s.jpg'},
    {'name': './stimuli/distractors/briefcase_07s.jpg', 'path': './stimuli/distractors/briefcase_07s.jpg'},
    {'name': './stimuli/58_2.jpg', 'path': './stimuli/58_2.jpg'},
    {'name': './stimuli/58_3.jpg', 'path': './stimuli/58_3.jpg'},
    {'name': './stimuli/58_1.jpg', 'path': './stimuli/58_1.jpg'},
    {'name': './stimuli/distractors/helicopter_24s.jpg', 'path': './stimuli/distractors/helicopter_24s.jpg'},
    {'name': './stimuli/distractors/helicopter_15s.jpg', 'path': './stimuli/distractors/helicopter_15s.jpg'},
    {'name': './stimuli/distractors/light_switch_08s.jpg', 'path': './stimuli/distractors/light_switch_08s.jpg'},
    {'name': './stimuli/distractors/light_switch_06s.jpg', 'path': './stimuli/distractors/light_switch_06s.jpg'},
    {'name': './stimuli/175_2.jpg', 'path': './stimuli/175_2.jpg'},
    {'name': './stimuli/175_3.jpg', 'path': './stimuli/175_3.jpg'},
    {'name': './stimuli/175_1.jpg', 'path': './stimuli/175_1.jpg'},
    {'name': './stimuli/distractors/snow_10s.jpg', 'path': './stimuli/distractors/snow_10s.jpg'},
    {'name': './stimuli/distractors/snow_06s.jpg', 'path': './stimuli/distractors/snow_06s.jpg'},
    {'name': './stimuli/distractors/tuning_fork_05s.jpg', 'path': './stimuli/distractors/tuning_fork_05s.jpg'},
    {'name': './stimuli/distractors/tuning_fork_02s.jpg', 'path': './stimuli/distractors/tuning_fork_02s.jpg'},
    {'name': './stimuli/187_2.jpg', 'path': './stimuli/187_2.jpg'},
    {'name': './stimuli/187_3.jpg', 'path': './stimuli/187_3.jpg'},
    {'name': './stimuli/187_1.jpg', 'path': './stimuli/187_1.jpg'},
    {'name': './stimuli/distractors/ambulance_04s.jpg', 'path': './stimuli/distractors/ambulance_04s.jpg'},
    {'name': './stimuli/distractors/ambulance_12s.jpg', 'path': './stimuli/distractors/ambulance_12s.jpg'},
    {'name': './stimuli/distractors/onion_08s.jpg', 'path': './stimuli/distractors/onion_08s.jpg'},
    {'name': './stimuli/distractors/onion_12n.jpg', 'path': './stimuli/distractors/onion_12n.jpg'},
    {'name': './stimuli/295_2.jpg', 'path': './stimuli/295_2.jpg'},
    {'name': './stimuli/295_3.jpg', 'path': './stimuli/295_3.jpg'},
    {'name': './stimuli/295_1.jpg', 'path': './stimuli/295_1.jpg'},
    {'name': './stimuli/distractors/catfish_07s.jpg', 'path': './stimuli/distractors/catfish_07s.jpg'},
    {'name': './stimuli/distractors/catfish_08s.jpg', 'path': './stimuli/distractors/catfish_08s.jpg'},
    {'name': './stimuli/distractors/pillow_03s.jpg', 'path': './stimuli/distractors/pillow_03s.jpg'},
    {'name': './stimuli/distractors/pillow_08s.jpg', 'path': './stimuli/distractors/pillow_08s.jpg'},
    {'name': './stimuli/81_2.jpg', 'path': './stimuli/81_2.jpg'},
    {'name': './stimuli/81_3.jpg', 'path': './stimuli/81_3.jpg'},
    {'name': './stimuli/81_1.jpg', 'path': './stimuli/81_1.jpg'},
    {'name': './stimuli/distractors/alpaca_03s.jpg', 'path': './stimuli/distractors/alpaca_03s.jpg'},
    {'name': './stimuli/distractors/alpaca_10s.jpg', 'path': './stimuli/distractors/alpaca_10s.jpg'},
    {'name': './stimuli/distractors/marble_12s.jpg', 'path': './stimuli/distractors/marble_12s.jpg'},
    {'name': './stimuli/distractors/marble_07s.jpg', 'path': './stimuli/distractors/marble_07s.jpg'},
    {'name': './stimuli/57_2.jpg', 'path': './stimuli/57_2.jpg'},
    {'name': './stimuli/57_3.jpg', 'path': './stimuli/57_3.jpg'},
    {'name': './stimuli/57_1.jpg', 'path': './stimuli/57_1.jpg'},
    {'name': './stimuli/distractors/ramp_01b.jpg', 'path': './stimuli/distractors/ramp_01b.jpg'},
    {'name': './stimuli/distractors/ramp_07s.jpg', 'path': './stimuli/distractors/ramp_07s.jpg'},
    {'name': './stimuli/distractors/piggy_bank_03s.jpg', 'path': './stimuli/distractors/piggy_bank_03s.jpg'},
    {'name': './stimuli/distractors/piggy_bank_02s.jpg', 'path': './stimuli/distractors/piggy_bank_02s.jpg'},
    {'name': './stimuli/88_2.jpg', 'path': './stimuli/88_2.jpg'},
    {'name': './stimuli/88_3.jpg', 'path': './stimuli/88_3.jpg'},
    {'name': './stimuli/88_1.jpg', 'path': './stimuli/88_1.jpg'},
    {'name': './stimuli/distractors/nest_08s.jpg', 'path': './stimuli/distractors/nest_08s.jpg'},
    {'name': './stimuli/distractors/nest_10s.jpg', 'path': './stimuli/distractors/nest_10s.jpg'},
    {'name': './stimuli/distractors/air_pump_04s.jpg', 'path': './stimuli/distractors/air_pump_04s.jpg'},
    {'name': './stimuli/distractors/air_pump_03s.jpg', 'path': './stimuli/distractors/air_pump_03s.jpg'},
    {'name': './stimuli/141_2.jpg', 'path': './stimuli/141_2.jpg'},
    {'name': './stimuli/141_3.jpg', 'path': './stimuli/141_3.jpg'},
    {'name': './stimuli/141_1.jpg', 'path': './stimuli/141_1.jpg'},
    {'name': './stimuli/distractors/sea_urchin_12s.jpg', 'path': './stimuli/distractors/sea_urchin_12s.jpg'},
    {'name': './stimuli/distractors/sea_urchin_17s.jpg', 'path': './stimuli/distractors/sea_urchin_17s.jpg'},
    {'name': './stimuli/distractors/cooker_10s.jpg', 'path': './stimuli/distractors/cooker_10s.jpg'},
    {'name': './stimuli/distractors/cooker_03s.jpg', 'path': './stimuli/distractors/cooker_03s.jpg'},
    {'name': './stimuli/264_2.jpg', 'path': './stimuli/264_2.jpg'},
    {'name': './stimuli/264_3.jpg', 'path': './stimuli/264_3.jpg'},
    {'name': './stimuli/264_1.jpg', 'path': './stimuli/264_1.jpg'},
    {'name': './stimuli/distractors/slug_04s.jpg', 'path': './stimuli/distractors/slug_04s.jpg'},
    {'name': './stimuli/distractors/slug_01s.jpg', 'path': './stimuli/distractors/slug_01s.jpg'},
    {'name': './stimuli/distractors/bassinet_11s.jpg', 'path': './stimuli/distractors/bassinet_11s.jpg'},
    {'name': './stimuli/distractors/bassinet_12s.jpg', 'path': './stimuli/distractors/bassinet_12s.jpg'},
    {'name': './stimuli/147_2.jpg', 'path': './stimuli/147_2.jpg'},
    {'name': './stimuli/147_3.jpg', 'path': './stimuli/147_3.jpg'},
    {'name': './stimuli/147_1.jpg', 'path': './stimuli/147_1.jpg'},
    {'name': './stimuli/distractors/daisy_09s.jpg', 'path': './stimuli/distractors/daisy_09s.jpg'},
    {'name': './stimuli/distractors/daisy_03s.jpg', 'path': './stimuli/distractors/daisy_03s.jpg'},
    {'name': './stimuli/distractors/cellphone_12s.jpg', 'path': './stimuli/distractors/cellphone_12s.jpg'},
    {'name': './stimuli/distractors/cellphone_07s.jpg', 'path': './stimuli/distractors/cellphone_07s.jpg'},
    {'name': './stimuli/136_2.jpg', 'path': './stimuli/136_2.jpg'},
    {'name': './stimuli/136_3.jpg', 'path': './stimuli/136_3.jpg'},
    {'name': './stimuli/136_1.jpg', 'path': './stimuli/136_1.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_16s.jpg', 'path': './stimuli/distractors/hot-air_balloon_16s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_22s.jpg', 'path': './stimuli/distractors/hot-air_balloon_22s.jpg'},
    {'name': './stimuli/distractors/can_opener_12s.jpg', 'path': './stimuli/distractors/can_opener_12s.jpg'},
    {'name': './stimuli/distractors/can_opener_06s.jpg', 'path': './stimuli/distractors/can_opener_06s.jpg'},
    {'name': './stimuli/151_2.jpg', 'path': './stimuli/151_2.jpg'},
    {'name': './stimuli/151_3.jpg', 'path': './stimuli/151_3.jpg'},
    {'name': './stimuli/151_1.jpg', 'path': './stimuli/151_1.jpg'},
    {'name': './stimuli/distractors/microwave_09s.jpg', 'path': './stimuli/distractors/microwave_09s.jpg'},
    {'name': './stimuli/distractors/microwave_06s.jpg', 'path': './stimuli/distractors/microwave_06s.jpg'},
    {'name': './stimuli/distractors/raincoat_10s.jpg', 'path': './stimuli/distractors/raincoat_10s.jpg'},
    {'name': './stimuli/distractors/raincoat_05s.jpg', 'path': './stimuli/distractors/raincoat_05s.jpg'},
    {'name': './stimuli/120_2.jpg', 'path': './stimuli/120_2.jpg'},
    {'name': './stimuli/120_3.jpg', 'path': './stimuli/120_3.jpg'},
    {'name': './stimuli/120_1.jpg', 'path': './stimuli/120_1.jpg'},
    {'name': './stimuli/distractors/dashboard_01b.jpg', 'path': './stimuli/distractors/dashboard_01b.jpg'},
    {'name': './stimuli/distractors/dashboard_10s.jpg', 'path': './stimuli/distractors/dashboard_10s.jpg'},
    {'name': './stimuli/distractors/cot_06s.jpg', 'path': './stimuli/distractors/cot_06s.jpg'},
    {'name': './stimuli/distractors/cot_09s.jpg', 'path': './stimuli/distractors/cot_09s.jpg'},
    {'name': './stimuli/188_2.jpg', 'path': './stimuli/188_2.jpg'},
    {'name': './stimuli/188_3.jpg', 'path': './stimuli/188_3.jpg'},
    {'name': './stimuli/188_1.jpg', 'path': './stimuli/188_1.jpg'},
    {'name': './stimuli/distractors/reindeer_20s.jpg', 'path': './stimuli/distractors/reindeer_20s.jpg'},
    {'name': './stimuli/distractors/reindeer_19s.jpg', 'path': './stimuli/distractors/reindeer_19s.jpg'},
    {'name': './stimuli/distractors/tab_02s.jpg', 'path': './stimuli/distractors/tab_02s.jpg'},
    {'name': './stimuli/distractors/tab_11s.jpg', 'path': './stimuli/distractors/tab_11s.jpg'},
    {'name': './stimuli/76_2.jpg', 'path': './stimuli/76_2.jpg'},
    {'name': './stimuli/76_3.jpg', 'path': './stimuli/76_3.jpg'},
    {'name': './stimuli/76_1.jpg', 'path': './stimuli/76_1.jpg'},
    {'name': './stimuli/distractors/slug_13s.jpg', 'path': './stimuli/distractors/slug_13s.jpg'},
    {'name': './stimuli/distractors/slug_10s.jpg', 'path': './stimuli/distractors/slug_10s.jpg'},
    {'name': './stimuli/distractors/limousine_09s.jpg', 'path': './stimuli/distractors/limousine_09s.jpg'},
    {'name': './stimuli/distractors/limousine_02s.jpg', 'path': './stimuli/distractors/limousine_02s.jpg'},
    {'name': './stimuli/281_2.jpg', 'path': './stimuli/281_2.jpg'},
    {'name': './stimuli/281_3.jpg', 'path': './stimuli/281_3.jpg'},
    {'name': './stimuli/281_1.jpg', 'path': './stimuli/281_1.jpg'},
    {'name': './stimuli/distractors/trap_04s.jpg', 'path': './stimuli/distractors/trap_04s.jpg'},
    {'name': './stimuli/distractors/trap_09s.jpg', 'path': './stimuli/distractors/trap_09s.jpg'},
    {'name': './stimuli/distractors/plug_13s.jpg', 'path': './stimuli/distractors/plug_13s.jpg'},
    {'name': './stimuli/distractors/plug_11s.jpg', 'path': './stimuli/distractors/plug_11s.jpg'},
    {'name': './stimuli/65_2.jpg', 'path': './stimuli/65_2.jpg'},
    {'name': './stimuli/65_3.jpg', 'path': './stimuli/65_3.jpg'},
    {'name': './stimuli/65_1.jpg', 'path': './stimuli/65_1.jpg'},
    {'name': './stimuli/distractors/platypus_03s.jpg', 'path': './stimuli/distractors/platypus_03s.jpg'},
    {'name': './stimuli/distractors/platypus_09s.jpg', 'path': './stimuli/distractors/platypus_09s.jpg'},
    {'name': './stimuli/distractors/nutcracker_01b.jpg', 'path': './stimuli/distractors/nutcracker_01b.jpg'},
    {'name': './stimuli/distractors/nutcracker_08s.jpg', 'path': './stimuli/distractors/nutcracker_08s.jpg'},
    {'name': './stimuli/29_2.jpg', 'path': './stimuli/29_2.jpg'},
    {'name': './stimuli/29_3.jpg', 'path': './stimuli/29_3.jpg'},
    {'name': './stimuli/29_1.jpg', 'path': './stimuli/29_1.jpg'},
    {'name': './stimuli/distractors/crystal1_08s.jpg', 'path': './stimuli/distractors/crystal1_08s.jpg'},
    {'name': './stimuli/distractors/crystal1_05s.jpg', 'path': './stimuli/distractors/crystal1_05s.jpg'},
    {'name': './stimuli/distractors/parsley_12n.jpg', 'path': './stimuli/distractors/parsley_12n.jpg'},
    {'name': './stimuli/distractors/parsley_08s.jpg', 'path': './stimuli/distractors/parsley_08s.jpg'},
    {'name': './stimuli/149_2.jpg', 'path': './stimuli/149_2.jpg'},
    {'name': './stimuli/149_3.jpg', 'path': './stimuli/149_3.jpg'},
    {'name': './stimuli/149_1.jpg', 'path': './stimuli/149_1.jpg'},
    {'name': './stimuli/distractors/calf2_13s.jpg', 'path': './stimuli/distractors/calf2_13s.jpg'},
    {'name': './stimuli/distractors/calf2_06s.jpg', 'path': './stimuli/distractors/calf2_06s.jpg'},
    {'name': './stimuli/distractors/keg_17s.jpg', 'path': './stimuli/distractors/keg_17s.jpg'},
    {'name': './stimuli/distractors/keg_10s.jpg', 'path': './stimuli/distractors/keg_10s.jpg'},
    {'name': './stimuli/37_2.jpg', 'path': './stimuli/37_2.jpg'},
    {'name': './stimuli/37_3.jpg', 'path': './stimuli/37_3.jpg'},
    {'name': './stimuli/37_1.jpg', 'path': './stimuli/37_1.jpg'},
    {'name': './stimuli/distractors/windsock_10s.jpg', 'path': './stimuli/distractors/windsock_10s.jpg'},
    {'name': './stimuli/distractors/windsock_08s.jpg', 'path': './stimuli/distractors/windsock_08s.jpg'},
    {'name': './stimuli/distractors/goblet_13s.jpg', 'path': './stimuli/distractors/goblet_13s.jpg'},
    {'name': './stimuli/distractors/goblet_14s.jpg', 'path': './stimuli/distractors/goblet_14s.jpg'},
    {'name': './stimuli/71_2.jpg', 'path': './stimuli/71_2.jpg'},
    {'name': './stimuli/71_3.jpg', 'path': './stimuli/71_3.jpg'},
    {'name': './stimuli/71_1.jpg', 'path': './stimuli/71_1.jpg'},
    {'name': './stimuli/distractors/treadmill_17n.jpg', 'path': './stimuli/distractors/treadmill_17n.jpg'},
    {'name': './stimuli/distractors/treadmill_10s.jpg', 'path': './stimuli/distractors/treadmill_10s.jpg'},
    {'name': './stimuli/distractors/muffin_01b.jpg', 'path': './stimuli/distractors/muffin_01b.jpg'},
    {'name': './stimuli/distractors/muffin_13n.jpg', 'path': './stimuli/distractors/muffin_13n.jpg'},
    {'name': './stimuli/195_2.jpg', 'path': './stimuli/195_2.jpg'},
    {'name': './stimuli/195_3.jpg', 'path': './stimuli/195_3.jpg'},
    {'name': './stimuli/195_1.jpg', 'path': './stimuli/195_1.jpg'},
    {'name': './stimuli/distractors/badger_02s.jpg', 'path': './stimuli/distractors/badger_02s.jpg'},
    {'name': './stimuli/distractors/badger_17s.jpg', 'path': './stimuli/distractors/badger_17s.jpg'},
    {'name': './stimuli/distractors/typewriter_06s.jpg', 'path': './stimuli/distractors/typewriter_06s.jpg'},
    {'name': './stimuli/distractors/typewriter_11s.jpg', 'path': './stimuli/distractors/typewriter_11s.jpg'},
    {'name': './stimuli/190_2.jpg', 'path': './stimuli/190_2.jpg'},
    {'name': './stimuli/190_3.jpg', 'path': './stimuli/190_3.jpg'},
    {'name': './stimuli/190_1.jpg', 'path': './stimuli/190_1.jpg'},
    {'name': './stimuli/distractors/barbed_wire_03s.jpg', 'path': './stimuli/distractors/barbed_wire_03s.jpg'},
    {'name': './stimuli/distractors/barbed_wire_17s.jpg', 'path': './stimuli/distractors/barbed_wire_17s.jpg'},
    {'name': './stimuli/distractors/oatmeal_03s.jpg', 'path': './stimuli/distractors/oatmeal_03s.jpg'},
    {'name': './stimuli/distractors/oatmeal_12s.jpg', 'path': './stimuli/distractors/oatmeal_12s.jpg'},
    {'name': './stimuli/293_2.jpg', 'path': './stimuli/293_2.jpg'},
    {'name': './stimuli/293_3.jpg', 'path': './stimuli/293_3.jpg'},
    {'name': './stimuli/293_1.jpg', 'path': './stimuli/293_1.jpg'},
    {'name': './stimuli/distractors/makeup_10s.jpg', 'path': './stimuli/distractors/makeup_10s.jpg'},
    {'name': './stimuli/distractors/makeup_03s.jpg', 'path': './stimuli/distractors/makeup_03s.jpg'},
    {'name': './stimuli/distractors/sloth_02s.jpg', 'path': './stimuli/distractors/sloth_02s.jpg'},
    {'name': './stimuli/distractors/sloth_11n.jpg', 'path': './stimuli/distractors/sloth_11n.jpg'},
    {'name': './stimuli/41_2.jpg', 'path': './stimuli/41_2.jpg'},
    {'name': './stimuli/41_3.jpg', 'path': './stimuli/41_3.jpg'},
    {'name': './stimuli/41_1.jpg', 'path': './stimuli/41_1.jpg'},
    {'name': './stimuli/distractors/platypus_05s.jpg', 'path': './stimuli/distractors/platypus_05s.jpg'},
    {'name': './stimuli/distractors/platypus_06s.jpg', 'path': './stimuli/distractors/platypus_06s.jpg'},
    {'name': './stimuli/distractors/camera1_11s.jpg', 'path': './stimuli/distractors/camera1_11s.jpg'},
    {'name': './stimuli/distractors/camera1_05s.jpg', 'path': './stimuli/distractors/camera1_05s.jpg'},
    {'name': './stimuli/53_2.jpg', 'path': './stimuli/53_2.jpg'},
    {'name': './stimuli/53_3.jpg', 'path': './stimuli/53_3.jpg'},
    {'name': './stimuli/53_1.jpg', 'path': './stimuli/53_1.jpg'},
    {'name': './stimuli/distractors/guitar_14s.jpg', 'path': './stimuli/distractors/guitar_14s.jpg'},
    {'name': './stimuli/distractors/guitar_12s.jpg', 'path': './stimuli/distractors/guitar_12s.jpg'},
    {'name': './stimuli/distractors/steak_11s.jpg', 'path': './stimuli/distractors/steak_11s.jpg'},
    {'name': './stimuli/distractors/steak_03s.jpg', 'path': './stimuli/distractors/steak_03s.jpg'},
    {'name': './stimuli/115_2.jpg', 'path': './stimuli/115_2.jpg'},
    {'name': './stimuli/115_3.jpg', 'path': './stimuli/115_3.jpg'},
    {'name': './stimuli/115_1.jpg', 'path': './stimuli/115_1.jpg'},
    {'name': './stimuli/distractors/pacifier_11s.jpg', 'path': './stimuli/distractors/pacifier_11s.jpg'},
    {'name': './stimuli/distractors/pacifier_08s.jpg', 'path': './stimuli/distractors/pacifier_08s.jpg'},
    {'name': './stimuli/distractors/soy_sauce_06s.jpg', 'path': './stimuli/distractors/soy_sauce_06s.jpg'},
    {'name': './stimuli/distractors/soy_sauce_11s.jpg', 'path': './stimuli/distractors/soy_sauce_11s.jpg'},
    {'name': './stimuli/124_2.jpg', 'path': './stimuli/124_2.jpg'},
    {'name': './stimuli/124_3.jpg', 'path': './stimuli/124_3.jpg'},
    {'name': './stimuli/124_1.jpg', 'path': './stimuli/124_1.jpg'},
    {'name': './stimuli/distractors/cantaloupe_12s.jpg', 'path': './stimuli/distractors/cantaloupe_12s.jpg'},
    {'name': './stimuli/distractors/cantaloupe_06s.jpg', 'path': './stimuli/distractors/cantaloupe_06s.jpg'},
    {'name': './stimuli/distractors/corkboard_10s.jpg', 'path': './stimuli/distractors/corkboard_10s.jpg'},
    {'name': './stimuli/distractors/corkboard_12s.jpg', 'path': './stimuli/distractors/corkboard_12s.jpg'},
    {'name': './stimuli/18_2.jpg', 'path': './stimuli/18_2.jpg'},
    {'name': './stimuli/18_3.jpg', 'path': './stimuli/18_3.jpg'},
    {'name': './stimuli/18_1.jpg', 'path': './stimuli/18_1.jpg'},
    {'name': './stimuli/distractors/tackle_10s.jpg', 'path': './stimuli/distractors/tackle_10s.jpg'},
    {'name': './stimuli/distractors/tackle_12s.jpg', 'path': './stimuli/distractors/tackle_12s.jpg'},
    {'name': './stimuli/distractors/lightbulb_11s.jpg', 'path': './stimuli/distractors/lightbulb_11s.jpg'},
    {'name': './stimuli/distractors/lightbulb_06s.jpg', 'path': './stimuli/distractors/lightbulb_06s.jpg'},
    {'name': './stimuli/133_2.jpg', 'path': './stimuli/133_2.jpg'},
    {'name': './stimuli/133_3.jpg', 'path': './stimuli/133_3.jpg'},
    {'name': './stimuli/133_1.jpg', 'path': './stimuli/133_1.jpg'},
    {'name': './stimuli/distractors/turtleneck_05s.jpg', 'path': './stimuli/distractors/turtleneck_05s.jpg'},
    {'name': './stimuli/distractors/turtleneck_13s.jpg', 'path': './stimuli/distractors/turtleneck_13s.jpg'},
    {'name': './stimuli/distractors/cabbage_05s.jpg', 'path': './stimuli/distractors/cabbage_05s.jpg'},
    {'name': './stimuli/distractors/cabbage_11s.jpg', 'path': './stimuli/distractors/cabbage_11s.jpg'},
    {'name': './stimuli/275_2.jpg', 'path': './stimuli/275_2.jpg'},
    {'name': './stimuli/275_3.jpg', 'path': './stimuli/275_3.jpg'},
    {'name': './stimuli/275_1.jpg', 'path': './stimuli/275_1.jpg'},
    {'name': './stimuli/distractors/jet_11s.jpg', 'path': './stimuli/distractors/jet_11s.jpg'},
    {'name': './stimuli/distractors/jet_01b.jpg', 'path': './stimuli/distractors/jet_01b.jpg'},
    {'name': './stimuli/distractors/phone_12s.jpg', 'path': './stimuli/distractors/phone_12s.jpg'},
    {'name': './stimuli/distractors/phone_08s.jpg', 'path': './stimuli/distractors/phone_08s.jpg'},
    {'name': './stimuli/110_2.jpg', 'path': './stimuli/110_2.jpg'},
    {'name': './stimuli/110_3.jpg', 'path': './stimuli/110_3.jpg'},
    {'name': './stimuli/110_1.jpg', 'path': './stimuli/110_1.jpg'},
    {'name': './stimuli/distractors/dress_10s.jpg', 'path': './stimuli/distractors/dress_10s.jpg'},
    {'name': './stimuli/distractors/dress_01b.jpg', 'path': './stimuli/distractors/dress_01b.jpg'},
    {'name': './stimuli/distractors/guinea_pig_04s.jpg', 'path': './stimuli/distractors/guinea_pig_04s.jpg'},
    {'name': './stimuli/distractors/guinea_pig_10s.jpg', 'path': './stimuli/distractors/guinea_pig_10s.jpg'},
    {'name': './stimuli/31_2.jpg', 'path': './stimuli/31_2.jpg'},
    {'name': './stimuli/31_3.jpg', 'path': './stimuli/31_3.jpg'},
    {'name': './stimuli/31_1.jpg', 'path': './stimuli/31_1.jpg'},
    {'name': './stimuli/distractors/boot_15s.jpg', 'path': './stimuli/distractors/boot_15s.jpg'},
    {'name': './stimuli/distractors/boot_07s.jpg', 'path': './stimuli/distractors/boot_07s.jpg'},
    {'name': './stimuli/distractors/shoe_18s.jpg', 'path': './stimuli/distractors/shoe_18s.jpg'},
    {'name': './stimuli/distractors/shoe_06s.jpg', 'path': './stimuli/distractors/shoe_06s.jpg'},
    {'name': './stimuli/234_2.jpg', 'path': './stimuli/234_2.jpg'},
    {'name': './stimuli/234_3.jpg', 'path': './stimuli/234_3.jpg'},
    {'name': './stimuli/234_1.jpg', 'path': './stimuli/234_1.jpg'},
    {'name': './stimuli/distractors/oar_13s.jpg', 'path': './stimuli/distractors/oar_13s.jpg'},
    {'name': './stimuli/distractors/oar_03s.jpg', 'path': './stimuli/distractors/oar_03s.jpg'},
    {'name': './stimuli/distractors/suit_06s.jpg', 'path': './stimuli/distractors/suit_06s.jpg'},
    {'name': './stimuli/distractors/suit_07s.jpg', 'path': './stimuli/distractors/suit_07s.jpg'},
    {'name': './stimuli/138_2.jpg', 'path': './stimuli/138_2.jpg'},
    {'name': './stimuli/138_3.jpg', 'path': './stimuli/138_3.jpg'},
    {'name': './stimuli/138_1.jpg', 'path': './stimuli/138_1.jpg'},
    {'name': './stimuli/distractors/lobster_11s.jpg', 'path': './stimuli/distractors/lobster_11s.jpg'},
    {'name': './stimuli/distractors/lobster_07s.jpg', 'path': './stimuli/distractors/lobster_07s.jpg'},
    {'name': './stimuli/distractors/diskette_11s.jpg', 'path': './stimuli/distractors/diskette_11s.jpg'},
    {'name': './stimuli/distractors/diskette_10s.jpg', 'path': './stimuli/distractors/diskette_10s.jpg'},
    {'name': './stimuli/183_2.jpg', 'path': './stimuli/183_2.jpg'},
    {'name': './stimuli/183_3.jpg', 'path': './stimuli/183_3.jpg'},
    {'name': './stimuli/183_1.jpg', 'path': './stimuli/183_1.jpg'},
    {'name': './stimuli/distractors/sickle_04s.jpg', 'path': './stimuli/distractors/sickle_04s.jpg'},
    {'name': './stimuli/distractors/sickle_09s.jpg', 'path': './stimuli/distractors/sickle_09s.jpg'},
    {'name': './stimuli/distractors/coop_13s.jpg', 'path': './stimuli/distractors/coop_13s.jpg'},
    {'name': './stimuli/distractors/coop_12s.jpg', 'path': './stimuli/distractors/coop_12s.jpg'},
    {'name': './stimuli/128_2.jpg', 'path': './stimuli/128_2.jpg'},
    {'name': './stimuli/128_3.jpg', 'path': './stimuli/128_3.jpg'},
    {'name': './stimuli/128_1.jpg', 'path': './stimuli/128_1.jpg'},
    {'name': './stimuli/distractors/dough_11s.jpg', 'path': './stimuli/distractors/dough_11s.jpg'},
    {'name': './stimuli/distractors/dough_13s.jpg', 'path': './stimuli/distractors/dough_13s.jpg'},
    {'name': './stimuli/distractors/barrel_04s.jpg', 'path': './stimuli/distractors/barrel_04s.jpg'},
    {'name': './stimuli/distractors/barrel_02s.jpg', 'path': './stimuli/distractors/barrel_02s.jpg'},
    {'name': './stimuli/67_2.jpg', 'path': './stimuli/67_2.jpg'},
    {'name': './stimuli/67_3.jpg', 'path': './stimuli/67_3.jpg'},
    {'name': './stimuli/67_1.jpg', 'path': './stimuli/67_1.jpg'},
    {'name': './stimuli/distractors/ostrich_13s.jpg', 'path': './stimuli/distractors/ostrich_13s.jpg'},
    {'name': './stimuli/distractors/ostrich_14s.jpg', 'path': './stimuli/distractors/ostrich_14s.jpg'},
    {'name': './stimuli/distractors/handbrake_02s.jpg', 'path': './stimuli/distractors/handbrake_02s.jpg'},
    {'name': './stimuli/distractors/handbrake_09s.jpg', 'path': './stimuli/distractors/handbrake_09s.jpg'},
    {'name': './stimuli/68_2.jpg', 'path': './stimuli/68_2.jpg'},
    {'name': './stimuli/68_3.jpg', 'path': './stimuli/68_3.jpg'},
    {'name': './stimuli/68_1.jpg', 'path': './stimuli/68_1.jpg'},
    {'name': './stimuli/distractors/hyena_10s.jpg', 'path': './stimuli/distractors/hyena_10s.jpg'},
    {'name': './stimuli/distractors/hyena_15s.jpg', 'path': './stimuli/distractors/hyena_15s.jpg'},
    {'name': './stimuli/distractors/measuring_cup_06s.jpg', 'path': './stimuli/distractors/measuring_cup_06s.jpg'},
    {'name': './stimuli/distractors/measuring_cup_02s.jpg', 'path': './stimuli/distractors/measuring_cup_02s.jpg'},
    {'name': './stimuli/211_2.jpg', 'path': './stimuli/211_2.jpg'},
    {'name': './stimuli/211_3.jpg', 'path': './stimuli/211_3.jpg'},
    {'name': './stimuli/211_1.jpg', 'path': './stimuli/211_1.jpg'},
    {'name': './stimuli/distractors/carriage_03s.jpg', 'path': './stimuli/distractors/carriage_03s.jpg'},
    {'name': './stimuli/distractors/carriage_14s.jpg', 'path': './stimuli/distractors/carriage_14s.jpg'},
    {'name': './stimuli/distractors/pesto_04s.jpg', 'path': './stimuli/distractors/pesto_04s.jpg'},
    {'name': './stimuli/distractors/pesto_12s.jpg', 'path': './stimuli/distractors/pesto_12s.jpg'},
    {'name': './stimuli/181_2.jpg', 'path': './stimuli/181_2.jpg'},
    {'name': './stimuli/181_3.jpg', 'path': './stimuli/181_3.jpg'},
    {'name': './stimuli/181_1.jpg', 'path': './stimuli/181_1.jpg'},
    {'name': './stimuli/distractors/bow2_06s.jpg', 'path': './stimuli/distractors/bow2_06s.jpg'},
    {'name': './stimuli/distractors/bow2_02s.jpg', 'path': './stimuli/distractors/bow2_02s.jpg'},
    {'name': './stimuli/distractors/quesadilla_03s.jpg', 'path': './stimuli/distractors/quesadilla_03s.jpg'},
    {'name': './stimuli/distractors/quesadilla_20s.jpg', 'path': './stimuli/distractors/quesadilla_20s.jpg'},
    {'name': './stimuli/70_2.jpg', 'path': './stimuli/70_2.jpg'},
    {'name': './stimuli/70_3.jpg', 'path': './stimuli/70_3.jpg'},
    {'name': './stimuli/70_1.jpg', 'path': './stimuli/70_1.jpg'},
    {'name': './stimuli/distractors/stretcher_09s.jpg', 'path': './stimuli/distractors/stretcher_09s.jpg'},
    {'name': './stimuli/distractors/stretcher_03s.jpg', 'path': './stimuli/distractors/stretcher_03s.jpg'},
    {'name': './stimuli/distractors/acorn_14n.jpg', 'path': './stimuli/distractors/acorn_14n.jpg'},
    {'name': './stimuli/distractors/acorn_02n.jpg', 'path': './stimuli/distractors/acorn_02n.jpg'},
    {'name': './stimuli/43_2.jpg', 'path': './stimuli/43_2.jpg'},
    {'name': './stimuli/43_3.jpg', 'path': './stimuli/43_3.jpg'},
    {'name': './stimuli/43_1.jpg', 'path': './stimuli/43_1.jpg'},
    {'name': './stimuli/distractors/raccoon_02s.jpg', 'path': './stimuli/distractors/raccoon_02s.jpg'},
    {'name': './stimuli/distractors/raccoon_04n.jpg', 'path': './stimuli/distractors/raccoon_04n.jpg'},
    {'name': './stimuli/distractors/turtleneck_08s.jpg', 'path': './stimuli/distractors/turtleneck_08s.jpg'},
    {'name': './stimuli/distractors/turtleneck_09s.jpg', 'path': './stimuli/distractors/turtleneck_09s.jpg'},
    {'name': './stimuli/85_2.jpg', 'path': './stimuli/85_2.jpg'},
    {'name': './stimuli/85_3.jpg', 'path': './stimuli/85_3.jpg'},
    {'name': './stimuli/85_1.jpg', 'path': './stimuli/85_1.jpg'},
    {'name': './stimuli/distractors/quad_10s.jpg', 'path': './stimuli/distractors/quad_10s.jpg'},
    {'name': './stimuli/distractors/quad_08s.jpg', 'path': './stimuli/distractors/quad_08s.jpg'},
    {'name': './stimuli/distractors/grater_04s.jpg', 'path': './stimuli/distractors/grater_04s.jpg'},
    {'name': './stimuli/distractors/grater_12s.jpg', 'path': './stimuli/distractors/grater_12s.jpg'},
    {'name': './stimuli/3_2.jpg', 'path': './stimuli/3_2.jpg'},
    {'name': './stimuli/3_3.jpg', 'path': './stimuli/3_3.jpg'},
    {'name': './stimuli/3_1.jpg', 'path': './stimuli/3_1.jpg'},
    {'name': './stimuli/distractors/antelope_05n.jpg', 'path': './stimuli/distractors/antelope_05n.jpg'},
    {'name': './stimuli/distractors/antelope_09n.jpg', 'path': './stimuli/distractors/antelope_09n.jpg'},
    {'name': './stimuli/distractors/highchair_01b.jpg', 'path': './stimuli/distractors/highchair_01b.jpg'},
    {'name': './stimuli/distractors/highchair_04s.jpg', 'path': './stimuli/distractors/highchair_04s.jpg'},
    {'name': './stimuli/212_2.jpg', 'path': './stimuli/212_2.jpg'},
    {'name': './stimuli/212_3.jpg', 'path': './stimuli/212_3.jpg'},
    {'name': './stimuli/212_1.jpg', 'path': './stimuli/212_1.jpg'},
    {'name': './stimuli/distractors/bison_09s.jpg', 'path': './stimuli/distractors/bison_09s.jpg'},
    {'name': './stimuli/distractors/bison_08s.jpg', 'path': './stimuli/distractors/bison_08s.jpg'},
    {'name': './stimuli/distractors/barrette_07s.jpg', 'path': './stimuli/distractors/barrette_07s.jpg'},
    {'name': './stimuli/distractors/barrette_10s.jpg', 'path': './stimuli/distractors/barrette_10s.jpg'},
    {'name': './stimuli/237_2.jpg', 'path': './stimuli/237_2.jpg'},
    {'name': './stimuli/237_3.jpg', 'path': './stimuli/237_3.jpg'},
    {'name': './stimuli/237_1.jpg', 'path': './stimuli/237_1.jpg'},
    {'name': './stimuli/distractors/top_hat_03s.jpg', 'path': './stimuli/distractors/top_hat_03s.jpg'},
    {'name': './stimuli/distractors/top_hat_05s.jpg', 'path': './stimuli/distractors/top_hat_05s.jpg'},
    {'name': './stimuli/distractors/breadstick_14s.jpg', 'path': './stimuli/distractors/breadstick_14s.jpg'},
    {'name': './stimuli/distractors/breadstick_05s.jpg', 'path': './stimuli/distractors/breadstick_05s.jpg'},
    {'name': './stimuli/277_2.jpg', 'path': './stimuli/277_2.jpg'},
    {'name': './stimuli/277_3.jpg', 'path': './stimuli/277_3.jpg'},
    {'name': './stimuli/277_1.jpg', 'path': './stimuli/277_1.jpg'},
    {'name': './stimuli/distractors/toad_01b.jpg', 'path': './stimuli/distractors/toad_01b.jpg'},
    {'name': './stimuli/distractors/toad_02s.jpg', 'path': './stimuli/distractors/toad_02s.jpg'},
    {'name': './stimuli/distractors/diving_board_05s.jpg', 'path': './stimuli/distractors/diving_board_05s.jpg'},
    {'name': './stimuli/distractors/diving_board_13s.jpg', 'path': './stimuli/distractors/diving_board_13s.jpg'},
    {'name': './stimuli/130_2.jpg', 'path': './stimuli/130_2.jpg'},
    {'name': './stimuli/130_3.jpg', 'path': './stimuli/130_3.jpg'},
    {'name': './stimuli/130_1.jpg', 'path': './stimuli/130_1.jpg'},
    {'name': './stimuli/distractors/yak_05s.jpg', 'path': './stimuli/distractors/yak_05s.jpg'},
    {'name': './stimuli/distractors/yak_12s.jpg', 'path': './stimuli/distractors/yak_12s.jpg'},
    {'name': './stimuli/distractors/soda_09s.jpg', 'path': './stimuli/distractors/soda_09s.jpg'},
    {'name': './stimuli/distractors/soda_02s.jpg', 'path': './stimuli/distractors/soda_02s.jpg'},
    {'name': './stimuli/244_2.jpg', 'path': './stimuli/244_2.jpg'},
    {'name': './stimuli/244_3.jpg', 'path': './stimuli/244_3.jpg'},
    {'name': './stimuli/244_1.jpg', 'path': './stimuli/244_1.jpg'},
    {'name': './stimuli/distractors/pelican_04s.jpg', 'path': './stimuli/distractors/pelican_04s.jpg'},
    {'name': './stimuli/distractors/pelican_10s.jpg', 'path': './stimuli/distractors/pelican_10s.jpg'},
    {'name': './stimuli/distractors/railing_07s.jpg', 'path': './stimuli/distractors/railing_07s.jpg'},
    {'name': './stimuli/distractors/railing_02s.jpg', 'path': './stimuli/distractors/railing_02s.jpg'},
    {'name': './stimuli/15_2.jpg', 'path': './stimuli/15_2.jpg'},
    {'name': './stimuli/15_3.jpg', 'path': './stimuli/15_3.jpg'},
    {'name': './stimuli/15_1.jpg', 'path': './stimuli/15_1.jpg'},
    {'name': './stimuli/distractors/car_05s.jpg', 'path': './stimuli/distractors/car_05s.jpg'},
    {'name': './stimuli/distractors/car_08s.jpg', 'path': './stimuli/distractors/car_08s.jpg'},
    {'name': './stimuli/distractors/robe_10s.jpg', 'path': './stimuli/distractors/robe_10s.jpg'},
    {'name': './stimuli/distractors/robe_02s.jpg', 'path': './stimuli/distractors/robe_02s.jpg'},
    {'name': './stimuli/66_2.jpg', 'path': './stimuli/66_2.jpg'},
    {'name': './stimuli/66_3.jpg', 'path': './stimuli/66_3.jpg'},
    {'name': './stimuli/66_1.jpg', 'path': './stimuli/66_1.jpg'},
    {'name': './stimuli/distractors/gondola_08s.jpg', 'path': './stimuli/distractors/gondola_08s.jpg'},
    {'name': './stimuli/distractors/gondola_12s.jpg', 'path': './stimuli/distractors/gondola_12s.jpg'},
    {'name': './stimuli/distractors/okra_14n.jpg', 'path': './stimuli/distractors/okra_14n.jpg'},
    {'name': './stimuli/distractors/okra_01b.jpg', 'path': './stimuli/distractors/okra_01b.jpg'},
    {'name': './stimuli/144_2.jpg', 'path': './stimuli/144_2.jpg'},
    {'name': './stimuli/144_3.jpg', 'path': './stimuli/144_3.jpg'},
    {'name': './stimuli/144_1.jpg', 'path': './stimuli/144_1.jpg'},
    {'name': './stimuli/distractors/cobra_09s.jpg', 'path': './stimuli/distractors/cobra_09s.jpg'},
    {'name': './stimuli/distractors/cobra_01b.jpg', 'path': './stimuli/distractors/cobra_01b.jpg'},
    {'name': './stimuli/distractors/espresso_11s.jpg', 'path': './stimuli/distractors/espresso_11s.jpg'},
    {'name': './stimuli/distractors/espresso_01b.jpg', 'path': './stimuli/distractors/espresso_01b.jpg'},
    {'name': './stimuli/173_2.jpg', 'path': './stimuli/173_2.jpg'},
    {'name': './stimuli/173_3.jpg', 'path': './stimuli/173_3.jpg'},
    {'name': './stimuli/173_1.jpg', 'path': './stimuli/173_1.jpg'},
    {'name': './stimuli/distractors/aircraft_carrier_21s.jpg', 'path': './stimuli/distractors/aircraft_carrier_21s.jpg'},
    {'name': './stimuli/distractors/aircraft_carrier_01b.jpg', 'path': './stimuli/distractors/aircraft_carrier_01b.jpg'},
    {'name': './stimuli/distractors/sundae_13s.jpg', 'path': './stimuli/distractors/sundae_13s.jpg'},
    {'name': './stimuli/distractors/sundae_11s.jpg', 'path': './stimuli/distractors/sundae_11s.jpg'},
    {'name': './stimuli/176_2.jpg', 'path': './stimuli/176_2.jpg'},
    {'name': './stimuli/176_3.jpg', 'path': './stimuli/176_3.jpg'},
    {'name': './stimuli/176_1.jpg', 'path': './stimuli/176_1.jpg'},
    {'name': './stimuli/distractors/chute_10s.jpg', 'path': './stimuli/distractors/chute_10s.jpg'},
    {'name': './stimuli/distractors/chute_01b.jpg', 'path': './stimuli/distractors/chute_01b.jpg'},
    {'name': './stimuli/distractors/towel_14n.jpg', 'path': './stimuli/distractors/towel_14n.jpg'},
    {'name': './stimuli/distractors/towel_05s.jpg', 'path': './stimuli/distractors/towel_05s.jpg'},
    {'name': './stimuli/268_2.jpg', 'path': './stimuli/268_2.jpg'},
    {'name': './stimuli/268_3.jpg', 'path': './stimuli/268_3.jpg'},
    {'name': './stimuli/268_1.jpg', 'path': './stimuli/268_1.jpg'},
    {'name': './stimuli/distractors/electric_chair_03s.jpg', 'path': './stimuli/distractors/electric_chair_03s.jpg'},
    {'name': './stimuli/distractors/electric_chair_09s.jpg', 'path': './stimuli/distractors/electric_chair_09s.jpg'},
    {'name': './stimuli/distractors/granite_04s.jpg', 'path': './stimuli/distractors/granite_04s.jpg'},
    {'name': './stimuli/distractors/granite_11s.jpg', 'path': './stimuli/distractors/granite_11s.jpg'},
    {'name': './stimuli/228_2.jpg', 'path': './stimuli/228_2.jpg'},
    {'name': './stimuli/228_3.jpg', 'path': './stimuli/228_3.jpg'},
    {'name': './stimuli/228_1.jpg', 'path': './stimuli/228_1.jpg'},
    {'name': './stimuli/distractors/crutch_09s.jpg', 'path': './stimuli/distractors/crutch_09s.jpg'},
    {'name': './stimuli/distractors/crutch_10s.jpg', 'path': './stimuli/distractors/crutch_10s.jpg'},
    {'name': './stimuli/distractors/wrapping_paper_05s.jpg', 'path': './stimuli/distractors/wrapping_paper_05s.jpg'},
    {'name': './stimuli/distractors/wrapping_paper_04s.jpg', 'path': './stimuli/distractors/wrapping_paper_04s.jpg'},
    {'name': './stimuli/108_2.jpg', 'path': './stimuli/108_2.jpg'},
    {'name': './stimuli/108_3.jpg', 'path': './stimuli/108_3.jpg'},
    {'name': './stimuli/108_1.jpg', 'path': './stimuli/108_1.jpg'},
    {'name': './stimuli/distractors/chipmunk_14n.jpg', 'path': './stimuli/distractors/chipmunk_14n.jpg'},
    {'name': './stimuli/distractors/chipmunk_02n.jpg', 'path': './stimuli/distractors/chipmunk_02n.jpg'},
    {'name': './stimuli/distractors/saxophone_06s.jpg', 'path': './stimuli/distractors/saxophone_06s.jpg'},
    {'name': './stimuli/distractors/saxophone_11s.jpg', 'path': './stimuli/distractors/saxophone_11s.jpg'},
    {'name': './stimuli/222_2.jpg', 'path': './stimuli/222_2.jpg'},
    {'name': './stimuli/222_3.jpg', 'path': './stimuli/222_3.jpg'},
    {'name': './stimuli/222_1.jpg', 'path': './stimuli/222_1.jpg'},
    {'name': './stimuli/distractors/sprinkler_05s.jpg', 'path': './stimuli/distractors/sprinkler_05s.jpg'},
    {'name': './stimuli/distractors/sprinkler_06s.jpg', 'path': './stimuli/distractors/sprinkler_06s.jpg'},
    {'name': './stimuli/distractors/highlighter_04s.jpg', 'path': './stimuli/distractors/highlighter_04s.jpg'},
    {'name': './stimuli/distractors/highlighter_03s.jpg', 'path': './stimuli/distractors/highlighter_03s.jpg'},
    {'name': './stimuli/254_2.jpg', 'path': './stimuli/254_2.jpg'},
    {'name': './stimuli/254_3.jpg', 'path': './stimuli/254_3.jpg'},
    {'name': './stimuli/254_1.jpg', 'path': './stimuli/254_1.jpg'},
    {'name': './stimuli/distractors/caterpillar_21n.jpg', 'path': './stimuli/distractors/caterpillar_21n.jpg'},
    {'name': './stimuli/distractors/caterpillar_20s.jpg', 'path': './stimuli/distractors/caterpillar_20s.jpg'},
    {'name': './stimuli/distractors/birdbath_15s.jpg', 'path': './stimuli/distractors/birdbath_15s.jpg'},
    {'name': './stimuli/distractors/birdbath_02s.jpg', 'path': './stimuli/distractors/birdbath_02s.jpg'},
    {'name': './stimuli/101_2.jpg', 'path': './stimuli/101_2.jpg'},
    {'name': './stimuli/101_3.jpg', 'path': './stimuli/101_3.jpg'},
    {'name': './stimuli/101_1.jpg', 'path': './stimuli/101_1.jpg'},
    {'name': './stimuli/distractors/wheel_02s.jpg', 'path': './stimuli/distractors/wheel_02s.jpg'},
    {'name': './stimuli/distractors/wheel_07s.jpg', 'path': './stimuli/distractors/wheel_07s.jpg'},
    {'name': './stimuli/distractors/fig_06n.jpg', 'path': './stimuli/distractors/fig_06n.jpg'},
    {'name': './stimuli/distractors/fig_11s.jpg', 'path': './stimuli/distractors/fig_11s.jpg'},
    {'name': './stimuli/9_2.jpg', 'path': './stimuli/9_2.jpg'},
    {'name': './stimuli/9_3.jpg', 'path': './stimuli/9_3.jpg'},
    {'name': './stimuli/9_1.jpg', 'path': './stimuli/9_1.jpg'},
    {'name': './stimuli/distractors/flamingo_08s.jpg', 'path': './stimuli/distractors/flamingo_08s.jpg'},
    {'name': './stimuli/distractors/flamingo_17s.jpg', 'path': './stimuli/distractors/flamingo_17s.jpg'},
    {'name': './stimuli/distractors/crystal_ball_01b.jpg', 'path': './stimuli/distractors/crystal_ball_01b.jpg'},
    {'name': './stimuli/distractors/crystal_ball_12s.jpg', 'path': './stimuli/distractors/crystal_ball_12s.jpg'},
    {'name': './stimuli/219_2.jpg', 'path': './stimuli/219_2.jpg'},
    {'name': './stimuli/219_3.jpg', 'path': './stimuli/219_3.jpg'},
    {'name': './stimuli/219_1.jpg', 'path': './stimuli/219_1.jpg'},
    {'name': './stimuli/distractors/bikini_10s.jpg', 'path': './stimuli/distractors/bikini_10s.jpg'},
    {'name': './stimuli/distractors/bikini_09s.jpg', 'path': './stimuli/distractors/bikini_09s.jpg'},
    {'name': './stimuli/distractors/pan_11s.jpg', 'path': './stimuli/distractors/pan_11s.jpg'},
    {'name': './stimuli/distractors/pan_04s.jpg', 'path': './stimuli/distractors/pan_04s.jpg'},
    {'name': './stimuli/46_2.jpg', 'path': './stimuli/46_2.jpg'},
    {'name': './stimuli/46_3.jpg', 'path': './stimuli/46_3.jpg'},
    {'name': './stimuli/46_1.jpg', 'path': './stimuli/46_1.jpg'},
    {'name': './stimuli/distractors/shoe_12s.jpg', 'path': './stimuli/distractors/shoe_12s.jpg'},
    {'name': './stimuli/distractors/shoe_08s.jpg', 'path': './stimuli/distractors/shoe_08s.jpg'},
    {'name': './stimuli/distractors/camel_06s.jpg', 'path': './stimuli/distractors/camel_06s.jpg'},
    {'name': './stimuli/distractors/camel_09s.jpg', 'path': './stimuli/distractors/camel_09s.jpg'},
    {'name': './stimuli/134_2.jpg', 'path': './stimuli/134_2.jpg'},
    {'name': './stimuli/134_3.jpg', 'path': './stimuli/134_3.jpg'},
    {'name': './stimuli/134_1.jpg', 'path': './stimuli/134_1.jpg'},
    {'name': './stimuli/distractors/terrarium_10s.jpg', 'path': './stimuli/distractors/terrarium_10s.jpg'},
    {'name': './stimuli/distractors/terrarium_01b.jpg', 'path': './stimuli/distractors/terrarium_01b.jpg'},
    {'name': './stimuli/distractors/centrifuge_06s.jpg', 'path': './stimuli/distractors/centrifuge_06s.jpg'},
    {'name': './stimuli/distractors/centrifuge_03s.jpg', 'path': './stimuli/distractors/centrifuge_03s.jpg'},
    {'name': './stimuli/271_2.jpg', 'path': './stimuli/271_2.jpg'},
    {'name': './stimuli/271_3.jpg', 'path': './stimuli/271_3.jpg'},
    {'name': './stimuli/271_1.jpg', 'path': './stimuli/271_1.jpg'},
    {'name': './stimuli/distractors/fungus_10s.jpg', 'path': './stimuli/distractors/fungus_10s.jpg'},
    {'name': './stimuli/distractors/fungus_12s.jpg', 'path': './stimuli/distractors/fungus_12s.jpg'},
    {'name': './stimuli/distractors/riser_04s.jpg', 'path': './stimuli/distractors/riser_04s.jpg'},
    {'name': './stimuli/distractors/riser_01b.jpg', 'path': './stimuli/distractors/riser_01b.jpg'},
    {'name': './stimuli/259_2.jpg', 'path': './stimuli/259_2.jpg'},
    {'name': './stimuli/259_3.jpg', 'path': './stimuli/259_3.jpg'},
    {'name': './stimuli/259_1.jpg', 'path': './stimuli/259_1.jpg'},
    {'name': './stimuli/distractors/cheeseburger_09s.jpg', 'path': './stimuli/distractors/cheeseburger_09s.jpg'},
    {'name': './stimuli/distractors/cheeseburger_04n.jpg', 'path': './stimuli/distractors/cheeseburger_04n.jpg'},
    {'name': './stimuli/distractors/lamppost_10s.jpg', 'path': './stimuli/distractors/lamppost_10s.jpg'},
    {'name': './stimuli/distractors/lamppost_16s.jpg', 'path': './stimuli/distractors/lamppost_16s.jpg'},
    {'name': './stimuli/86_2.jpg', 'path': './stimuli/86_2.jpg'},
    {'name': './stimuli/86_3.jpg', 'path': './stimuli/86_3.jpg'},
    {'name': './stimuli/86_1.jpg', 'path': './stimuli/86_1.jpg'},
    {'name': './stimuli/distractors/wheat_10s.jpg', 'path': './stimuli/distractors/wheat_10s.jpg'},
    {'name': './stimuli/distractors/wheat_06s.jpg', 'path': './stimuli/distractors/wheat_06s.jpg'},
    {'name': './stimuli/distractors/binder_20s.jpg', 'path': './stimuli/distractors/binder_20s.jpg'},
    {'name': './stimuli/distractors/binder_19s.jpg', 'path': './stimuli/distractors/binder_19s.jpg'},
    {'name': './stimuli/255_2.jpg', 'path': './stimuli/255_2.jpg'},
    {'name': './stimuli/255_3.jpg', 'path': './stimuli/255_3.jpg'},
    {'name': './stimuli/255_1.jpg', 'path': './stimuli/255_1.jpg'},
    {'name': './stimuli/distractors/warthog_15n.jpg', 'path': './stimuli/distractors/warthog_15n.jpg'},
    {'name': './stimuli/distractors/warthog_07s.jpg', 'path': './stimuli/distractors/warthog_07s.jpg'},
    {'name': './stimuli/distractors/drink_10s.jpg', 'path': './stimuli/distractors/drink_10s.jpg'},
    {'name': './stimuli/distractors/drink_07s.jpg', 'path': './stimuli/distractors/drink_07s.jpg'},
    {'name': './stimuli/214_2.jpg', 'path': './stimuli/214_2.jpg'},
    {'name': './stimuli/214_3.jpg', 'path': './stimuli/214_3.jpg'},
    {'name': './stimuli/214_1.jpg', 'path': './stimuli/214_1.jpg'},
    {'name': './stimuli/distractors/chick_12s.jpg', 'path': './stimuli/distractors/chick_12s.jpg'},
    {'name': './stimuli/distractors/chick_08s.jpg', 'path': './stimuli/distractors/chick_08s.jpg'},
    {'name': './stimuli/distractors/banner_13n.jpg', 'path': './stimuli/distractors/banner_13n.jpg'},
    {'name': './stimuli/distractors/banner_01b.jpg', 'path': './stimuli/distractors/banner_01b.jpg'},
    {'name': './stimuli/170_2.jpg', 'path': './stimuli/170_2.jpg'},
    {'name': './stimuli/170_3.jpg', 'path': './stimuli/170_3.jpg'},
    {'name': './stimuli/170_1.jpg', 'path': './stimuli/170_1.jpg'},
    {'name': './stimuli/distractors/seahorse_11s.jpg', 'path': './stimuli/distractors/seahorse_11s.jpg'},
    {'name': './stimuli/distractors/seahorse_04s.jpg', 'path': './stimuli/distractors/seahorse_04s.jpg'},
    {'name': './stimuli/distractors/bobsled_17n.jpg', 'path': './stimuli/distractors/bobsled_17n.jpg'},
    {'name': './stimuli/distractors/bobsled_05s.jpg', 'path': './stimuli/distractors/bobsled_05s.jpg'},
    {'name': './stimuli/55_2.jpg', 'path': './stimuli/55_2.jpg'},
    {'name': './stimuli/55_3.jpg', 'path': './stimuli/55_3.jpg'},
    {'name': './stimuli/55_1.jpg', 'path': './stimuli/55_1.jpg'},
    {'name': './stimuli/distractors/ivy_09s.jpg', 'path': './stimuli/distractors/ivy_09s.jpg'},
    {'name': './stimuli/distractors/ivy_04s.jpg', 'path': './stimuli/distractors/ivy_04s.jpg'},
    {'name': './stimuli/distractors/badger_14s.jpg', 'path': './stimuli/distractors/badger_14s.jpg'},
    {'name': './stimuli/distractors/badger_13s.jpg', 'path': './stimuli/distractors/badger_13s.jpg'},
    {'name': './stimuli/14_2.jpg', 'path': './stimuli/14_2.jpg'},
    {'name': './stimuli/14_3.jpg', 'path': './stimuli/14_3.jpg'},
    {'name': './stimuli/14_1.jpg', 'path': './stimuli/14_1.jpg'},
    {'name': './stimuli/distractors/tomato_09n.jpg', 'path': './stimuli/distractors/tomato_09n.jpg'},
    {'name': './stimuli/distractors/tomato_03s.jpg', 'path': './stimuli/distractors/tomato_03s.jpg'},
    {'name': './stimuli/distractors/caramel_09s.jpg', 'path': './stimuli/distractors/caramel_09s.jpg'},
    {'name': './stimuli/distractors/caramel_07s.jpg', 'path': './stimuli/distractors/caramel_07s.jpg'},
    {'name': './stimuli/148_2.jpg', 'path': './stimuli/148_2.jpg'},
    {'name': './stimuli/148_3.jpg', 'path': './stimuli/148_3.jpg'},
    {'name': './stimuli/148_1.jpg', 'path': './stimuli/148_1.jpg'},
    {'name': './stimuli/distractors/cucumber_11s.jpg', 'path': './stimuli/distractors/cucumber_11s.jpg'},
    {'name': './stimuli/distractors/cucumber_06s.jpg', 'path': './stimuli/distractors/cucumber_06s.jpg'},
    {'name': './stimuli/distractors/seal_03s.jpg', 'path': './stimuli/distractors/seal_03s.jpg'},
    {'name': './stimuli/distractors/seal_08s.jpg', 'path': './stimuli/distractors/seal_08s.jpg'},
    {'name': './stimuli/197_2.jpg', 'path': './stimuli/197_2.jpg'},
    {'name': './stimuli/197_3.jpg', 'path': './stimuli/197_3.jpg'},
    {'name': './stimuli/197_1.jpg', 'path': './stimuli/197_1.jpg'},
    {'name': './stimuli/distractors/moss_03s.jpg', 'path': './stimuli/distractors/moss_03s.jpg'},
    {'name': './stimuli/distractors/moss_11s.jpg', 'path': './stimuli/distractors/moss_11s.jpg'},
    {'name': './stimuli/distractors/cleat_08s.jpg', 'path': './stimuli/distractors/cleat_08s.jpg'},
    {'name': './stimuli/distractors/cleat_02s.jpg', 'path': './stimuli/distractors/cleat_02s.jpg'},
    {'name': './stimuli/50_2.jpg', 'path': './stimuli/50_2.jpg'},
    {'name': './stimuli/50_3.jpg', 'path': './stimuli/50_3.jpg'},
    {'name': './stimuli/50_1.jpg', 'path': './stimuli/50_1.jpg'},
    {'name': './stimuli/distractors/leaf_08s.jpg', 'path': './stimuli/distractors/leaf_08s.jpg'},
    {'name': './stimuli/distractors/leaf_07s.jpg', 'path': './stimuli/distractors/leaf_07s.jpg'},
    {'name': './stimuli/distractors/bungee_12s.jpg', 'path': './stimuli/distractors/bungee_12s.jpg'},
    {'name': './stimuli/distractors/bungee_08s.jpg', 'path': './stimuli/distractors/bungee_08s.jpg'},
    {'name': './stimuli/62_2.jpg', 'path': './stimuli/62_2.jpg'},
    {'name': './stimuli/62_3.jpg', 'path': './stimuli/62_3.jpg'},
    {'name': './stimuli/62_1.jpg', 'path': './stimuli/62_1.jpg'},
    {'name': './stimuli/distractors/hyena_09s.jpg', 'path': './stimuli/distractors/hyena_09s.jpg'},
    {'name': './stimuli/distractors/hyena_01b.jpg', 'path': './stimuli/distractors/hyena_01b.jpg'},
    {'name': './stimuli/distractors/candle_07n.jpg', 'path': './stimuli/distractors/candle_07n.jpg'},
    {'name': './stimuli/distractors/candle_12n.jpg', 'path': './stimuli/distractors/candle_12n.jpg'},
    {'name': './stimuli/99_2.jpg', 'path': './stimuli/99_2.jpg'},
    {'name': './stimuli/99_3.jpg', 'path': './stimuli/99_3.jpg'},
    {'name': './stimuli/99_1.jpg', 'path': './stimuli/99_1.jpg'},
    {'name': './stimuli/distractors/stew_16s.jpg', 'path': './stimuli/distractors/stew_16s.jpg'},
    {'name': './stimuli/distractors/stew_07s.jpg', 'path': './stimuli/distractors/stew_07s.jpg'},
    {'name': './stimuli/distractors/mast_11s.jpg', 'path': './stimuli/distractors/mast_11s.jpg'},
    {'name': './stimuli/distractors/mast_13s.jpg', 'path': './stimuli/distractors/mast_13s.jpg'},
    {'name': './stimuli/160_2.jpg', 'path': './stimuli/160_2.jpg'},
    {'name': './stimuli/160_3.jpg', 'path': './stimuli/160_3.jpg'},
    {'name': './stimuli/160_1.jpg', 'path': './stimuli/160_1.jpg'},
    {'name': './stimuli/distractors/barbed_wire_06s.jpg', 'path': './stimuli/distractors/barbed_wire_06s.jpg'},
    {'name': './stimuli/distractors/barbed_wire_02s.jpg', 'path': './stimuli/distractors/barbed_wire_02s.jpg'},
    {'name': './stimuli/distractors/ribbon_13s.jpg', 'path': './stimuli/distractors/ribbon_13s.jpg'},
    {'name': './stimuli/distractors/ribbon_10s.jpg', 'path': './stimuli/distractors/ribbon_10s.jpg'},
    {'name': './stimuli/45_2.jpg', 'path': './stimuli/45_2.jpg'},
    {'name': './stimuli/45_3.jpg', 'path': './stimuli/45_3.jpg'},
    {'name': './stimuli/45_1.jpg', 'path': './stimuli/45_1.jpg'},
    {'name': './stimuli/distractors/porcupine_12s.jpg', 'path': './stimuli/distractors/porcupine_12s.jpg'},
    {'name': './stimuli/distractors/porcupine_02s.jpg', 'path': './stimuli/distractors/porcupine_02s.jpg'},
    {'name': './stimuli/distractors/toaster_12s.jpg', 'path': './stimuli/distractors/toaster_12s.jpg'},
    {'name': './stimuli/distractors/toaster_07s.jpg', 'path': './stimuli/distractors/toaster_07s.jpg'},
    {'name': './stimuli/97_2.jpg', 'path': './stimuli/97_2.jpg'},
    {'name': './stimuli/97_3.jpg', 'path': './stimuli/97_3.jpg'},
    {'name': './stimuli/97_1.jpg', 'path': './stimuli/97_1.jpg'},
    {'name': './stimuli/distractors/headlight_10s.jpg', 'path': './stimuli/distractors/headlight_10s.jpg'},
    {'name': './stimuli/distractors/headlight_12s.jpg', 'path': './stimuli/distractors/headlight_12s.jpg'},
    {'name': './stimuli/distractors/monkey_07s.jpg', 'path': './stimuli/distractors/monkey_07s.jpg'},
    {'name': './stimuli/distractors/monkey_04s.jpg', 'path': './stimuli/distractors/monkey_04s.jpg'},
    {'name': './stimuli/262_2.jpg', 'path': './stimuli/262_2.jpg'},
    {'name': './stimuli/262_3.jpg', 'path': './stimuli/262_3.jpg'},
    {'name': './stimuli/262_1.jpg', 'path': './stimuli/262_1.jpg'},
    {'name': './stimuli/distractors/boar_12s.jpg', 'path': './stimuli/distractors/boar_12s.jpg'},
    {'name': './stimuli/distractors/boar_05s.jpg', 'path': './stimuli/distractors/boar_05s.jpg'},
    {'name': './stimuli/distractors/tortilla_01b.jpg', 'path': './stimuli/distractors/tortilla_01b.jpg'},
    {'name': './stimuli/distractors/tortilla_10s.jpg', 'path': './stimuli/distractors/tortilla_10s.jpg'},
    {'name': './stimuli/165_2.jpg', 'path': './stimuli/165_2.jpg'},
    {'name': './stimuli/165_3.jpg', 'path': './stimuli/165_3.jpg'},
    {'name': './stimuli/165_1.jpg', 'path': './stimuli/165_1.jpg'},
    {'name': './stimuli/distractors/raccoon_13n.jpg', 'path': './stimuli/distractors/raccoon_13n.jpg'},
    {'name': './stimuli/distractors/raccoon_09s.jpg', 'path': './stimuli/distractors/raccoon_09s.jpg'},
    {'name': './stimuli/distractors/altar_05s.jpg', 'path': './stimuli/distractors/altar_05s.jpg'},
    {'name': './stimuli/distractors/altar_15s.jpg', 'path': './stimuli/distractors/altar_15s.jpg'},
    {'name': './stimuli/240_2.jpg', 'path': './stimuli/240_2.jpg'},
    {'name': './stimuli/240_3.jpg', 'path': './stimuli/240_3.jpg'},
    {'name': './stimuli/240_1.jpg', 'path': './stimuli/240_1.jpg'},
    {'name': './stimuli/distractors/airplane_12n.jpg', 'path': './stimuli/distractors/airplane_12n.jpg'},
    {'name': './stimuli/distractors/airplane_11n.jpg', 'path': './stimuli/distractors/airplane_11n.jpg'},
    {'name': './stimuli/distractors/pretzel_06s.jpg', 'path': './stimuli/distractors/pretzel_06s.jpg'},
    {'name': './stimuli/distractors/pretzel_03s.jpg', 'path': './stimuli/distractors/pretzel_03s.jpg'},
    {'name': './stimuli/157_2.jpg', 'path': './stimuli/157_2.jpg'},
    {'name': './stimuli/157_3.jpg', 'path': './stimuli/157_3.jpg'},
    {'name': './stimuli/157_1.jpg', 'path': './stimuli/157_1.jpg'},
    {'name': './stimuli/distractors/puddle_08s.jpg', 'path': './stimuli/distractors/puddle_08s.jpg'},
    {'name': './stimuli/distractors/puddle_03s.jpg', 'path': './stimuli/distractors/puddle_03s.jpg'},
    {'name': './stimuli/distractors/doorknob_06s.jpg', 'path': './stimuli/distractors/doorknob_06s.jpg'},
    {'name': './stimuli/distractors/doorknob_15s.jpg', 'path': './stimuli/distractors/doorknob_15s.jpg'},
    {'name': './stimuli/202_2.jpg', 'path': './stimuli/202_2.jpg'},
    {'name': './stimuli/202_3.jpg', 'path': './stimuli/202_3.jpg'},
    {'name': './stimuli/202_1.jpg', 'path': './stimuli/202_1.jpg'},
    {'name': './stimuli/distractors/mousse_11s.jpg', 'path': './stimuli/distractors/mousse_11s.jpg'},
    {'name': './stimuli/distractors/mousse_08s.jpg', 'path': './stimuli/distractors/mousse_08s.jpg'},
    {'name': './stimuli/distractors/pipe2_08s.jpg', 'path': './stimuli/distractors/pipe2_08s.jpg'},
    {'name': './stimuli/distractors/pipe2_04s.jpg', 'path': './stimuli/distractors/pipe2_04s.jpg'},
    {'name': './stimuli/126_2.jpg', 'path': './stimuli/126_2.jpg'},
    {'name': './stimuli/126_3.jpg', 'path': './stimuli/126_3.jpg'},
    {'name': './stimuli/126_1.jpg', 'path': './stimuli/126_1.jpg'},
    {'name': './stimuli/distractors/kayak_13s.jpg', 'path': './stimuli/distractors/kayak_13s.jpg'},
    {'name': './stimuli/distractors/kayak_10s.jpg', 'path': './stimuli/distractors/kayak_10s.jpg'},
    {'name': './stimuli/distractors/roller_12s.jpg', 'path': './stimuli/distractors/roller_12s.jpg'},
    {'name': './stimuli/distractors/roller_05s.jpg', 'path': './stimuli/distractors/roller_05s.jpg'},
    {'name': './stimuli/220_2.jpg', 'path': './stimuli/220_2.jpg'},
    {'name': './stimuli/220_3.jpg', 'path': './stimuli/220_3.jpg'},
    {'name': './stimuli/220_1.jpg', 'path': './stimuli/220_1.jpg'},
    {'name': './stimuli/distractors/whiteboard_05s.jpg', 'path': './stimuli/distractors/whiteboard_05s.jpg'},
    {'name': './stimuli/distractors/whiteboard_06s.jpg', 'path': './stimuli/distractors/whiteboard_06s.jpg'},
    {'name': './stimuli/distractors/gumball_04s.jpg', 'path': './stimuli/distractors/gumball_04s.jpg'},
    {'name': './stimuli/distractors/gumball_01b.jpg', 'path': './stimuli/distractors/gumball_01b.jpg'},
    {'name': './stimuli/269_2.jpg', 'path': './stimuli/269_2.jpg'},
    {'name': './stimuli/269_3.jpg', 'path': './stimuli/269_3.jpg'},
    {'name': './stimuli/269_1.jpg', 'path': './stimuli/269_1.jpg'},
    {'name': './stimuli/distractors/palm_tree_06s.jpg', 'path': './stimuli/distractors/palm_tree_06s.jpg'},
    {'name': './stimuli/distractors/palm_tree_07s.jpg', 'path': './stimuli/distractors/palm_tree_07s.jpg'},
    {'name': './stimuli/distractors/soy_sauce_13s.jpg', 'path': './stimuli/distractors/soy_sauce_13s.jpg'},
    {'name': './stimuli/distractors/soy_sauce_07s.jpg', 'path': './stimuli/distractors/soy_sauce_07s.jpg'},
    {'name': './stimuli/247_2.jpg', 'path': './stimuli/247_2.jpg'},
    {'name': './stimuli/247_3.jpg', 'path': './stimuli/247_3.jpg'},
    {'name': './stimuli/247_1.jpg', 'path': './stimuli/247_1.jpg'},
    {'name': './stimuli/distractors/drumstick_04s.jpg', 'path': './stimuli/distractors/drumstick_04s.jpg'},
    {'name': './stimuli/distractors/drumstick_07s.jpg', 'path': './stimuli/distractors/drumstick_07s.jpg'},
    {'name': './stimuli/distractors/owl_07s.jpg', 'path': './stimuli/distractors/owl_07s.jpg'},
    {'name': './stimuli/distractors/owl_01b.jpg', 'path': './stimuli/distractors/owl_01b.jpg'},
    {'name': './stimuli/296_2.jpg', 'path': './stimuli/296_2.jpg'},
    {'name': './stimuli/296_3.jpg', 'path': './stimuli/296_3.jpg'},
    {'name': './stimuli/296_1.jpg', 'path': './stimuli/296_1.jpg'},
    {'name': './stimuli/distractors/bumper_04s.jpg', 'path': './stimuli/distractors/bumper_04s.jpg'},
    {'name': './stimuli/distractors/bumper_01b.jpg', 'path': './stimuli/distractors/bumper_01b.jpg'},
    {'name': './stimuli/distractors/tarantula_10s.jpg', 'path': './stimuli/distractors/tarantula_10s.jpg'},
    {'name': './stimuli/distractors/tarantula_15s.jpg', 'path': './stimuli/distractors/tarantula_15s.jpg'},
    {'name': './stimuli/266_2.jpg', 'path': './stimuli/266_2.jpg'},
    {'name': './stimuli/266_3.jpg', 'path': './stimuli/266_3.jpg'},
    {'name': './stimuli/266_1.jpg', 'path': './stimuli/266_1.jpg'},
    {'name': './stimuli/distractors/shark_08s.jpg', 'path': './stimuli/distractors/shark_08s.jpg'},
    {'name': './stimuli/distractors/shark_11s.jpg', 'path': './stimuli/distractors/shark_11s.jpg'},
    {'name': './stimuli/distractors/egg_04s.jpg', 'path': './stimuli/distractors/egg_04s.jpg'},
    {'name': './stimuli/distractors/egg_06s.jpg', 'path': './stimuli/distractors/egg_06s.jpg'},
    {'name': './stimuli/155_2.jpg', 'path': './stimuli/155_2.jpg'},
    {'name': './stimuli/155_3.jpg', 'path': './stimuli/155_3.jpg'},
    {'name': './stimuli/155_1.jpg', 'path': './stimuli/155_1.jpg'},
    {'name': './stimuli/distractors/lion_14s.jpg', 'path': './stimuli/distractors/lion_14s.jpg'},
    {'name': './stimuli/distractors/lion_02s.jpg', 'path': './stimuli/distractors/lion_02s.jpg'},
    {'name': './stimuli/distractors/seahorse_15s.jpg', 'path': './stimuli/distractors/seahorse_15s.jpg'},
    {'name': './stimuli/distractors/seahorse_06s.jpg', 'path': './stimuli/distractors/seahorse_06s.jpg'},
    {'name': './stimuli/250_2.jpg', 'path': './stimuli/250_2.jpg'},
    {'name': './stimuli/250_3.jpg', 'path': './stimuli/250_3.jpg'},
    {'name': './stimuli/250_1.jpg', 'path': './stimuli/250_1.jpg'},
    {'name': './stimuli/distractors/cheetah_11s.jpg', 'path': './stimuli/distractors/cheetah_11s.jpg'},
    {'name': './stimuli/distractors/cheetah_13n.jpg', 'path': './stimuli/distractors/cheetah_13n.jpg'},
    {'name': './stimuli/distractors/screwdriver_09s.jpg', 'path': './stimuli/distractors/screwdriver_09s.jpg'},
    {'name': './stimuli/distractors/screwdriver_15n.jpg', 'path': './stimuli/distractors/screwdriver_15n.jpg'},
    {'name': './stimuli/204_2.jpg', 'path': './stimuli/204_2.jpg'},
    {'name': './stimuli/204_3.jpg', 'path': './stimuli/204_3.jpg'},
    {'name': './stimuli/204_1.jpg', 'path': './stimuli/204_1.jpg'},
    {'name': './stimuli/distractors/poodle_07s.jpg', 'path': './stimuli/distractors/poodle_07s.jpg'},
    {'name': './stimuli/distractors/poodle_11s.jpg', 'path': './stimuli/distractors/poodle_11s.jpg'},
    {'name': './stimuli/distractors/soda_03s.jpg', 'path': './stimuli/distractors/soda_03s.jpg'},
    {'name': './stimuli/distractors/soda_07s.jpg', 'path': './stimuli/distractors/soda_07s.jpg'},
    {'name': './stimuli/276_2.jpg', 'path': './stimuli/276_2.jpg'},
    {'name': './stimuli/276_3.jpg', 'path': './stimuli/276_3.jpg'},
    {'name': './stimuli/276_1.jpg', 'path': './stimuli/276_1.jpg'},
    {'name': './stimuli/distractors/gurney_16s.jpg', 'path': './stimuli/distractors/gurney_16s.jpg'},
    {'name': './stimuli/distractors/gurney_10s.jpg', 'path': './stimuli/distractors/gurney_10s.jpg'},
    {'name': './stimuli/distractors/skull_07s.jpg', 'path': './stimuli/distractors/skull_07s.jpg'},
    {'name': './stimuli/distractors/skull_04s.jpg', 'path': './stimuli/distractors/skull_04s.jpg'},
    {'name': './stimuli/209_2.jpg', 'path': './stimuli/209_2.jpg'},
    {'name': './stimuli/209_3.jpg', 'path': './stimuli/209_3.jpg'},
    {'name': './stimuli/209_1.jpg', 'path': './stimuli/209_1.jpg'},
    {'name': './stimuli/distractors/crayon_02s.jpg', 'path': './stimuli/distractors/crayon_02s.jpg'},
    {'name': './stimuli/distractors/crayon_03s.jpg', 'path': './stimuli/distractors/crayon_03s.jpg'},
    {'name': './stimuli/distractors/shield_07s.jpg', 'path': './stimuli/distractors/shield_07s.jpg'},
    {'name': './stimuli/distractors/shield_08n.jpg', 'path': './stimuli/distractors/shield_08n.jpg'},
    {'name': './stimuli/137_2.jpg', 'path': './stimuli/137_2.jpg'},
    {'name': './stimuli/137_3.jpg', 'path': './stimuli/137_3.jpg'},
    {'name': './stimuli/137_1.jpg', 'path': './stimuli/137_1.jpg'},
    {'name': './stimuli/distractors/macadamia_07s.jpg', 'path': './stimuli/distractors/macadamia_07s.jpg'},
    {'name': './stimuli/distractors/macadamia_01b.jpg', 'path': './stimuli/distractors/macadamia_01b.jpg'},
    {'name': './stimuli/distractors/chive_02s.jpg', 'path': './stimuli/distractors/chive_02s.jpg'},
    {'name': './stimuli/distractors/chive_04s.jpg', 'path': './stimuli/distractors/chive_04s.jpg'},
    {'name': './stimuli/242_2.jpg', 'path': './stimuli/242_2.jpg'},
    {'name': './stimuli/242_3.jpg', 'path': './stimuli/242_3.jpg'},
    {'name': './stimuli/242_1.jpg', 'path': './stimuli/242_1.jpg'},
    {'name': './stimuli/distractors/clover_12s.jpg', 'path': './stimuli/distractors/clover_12s.jpg'},
    {'name': './stimuli/distractors/clover_03s.jpg', 'path': './stimuli/distractors/clover_03s.jpg'},
    {'name': './stimuli/distractors/oil_03s.jpg', 'path': './stimuli/distractors/oil_03s.jpg'},
    {'name': './stimuli/distractors/oil_14s.jpg', 'path': './stimuli/distractors/oil_14s.jpg'},
    {'name': './stimuli/54_2.jpg', 'path': './stimuli/54_2.jpg'},
    {'name': './stimuli/54_3.jpg', 'path': './stimuli/54_3.jpg'},
    {'name': './stimuli/54_1.jpg', 'path': './stimuli/54_1.jpg'},
    {'name': './stimuli/distractors/toucan_14s.jpg', 'path': './stimuli/distractors/toucan_14s.jpg'},
    {'name': './stimuli/distractors/toucan_01b.jpg', 'path': './stimuli/distractors/toucan_01b.jpg'},
    {'name': './stimuli/distractors/cannon_10n.jpg', 'path': './stimuli/distractors/cannon_10n.jpg'},
    {'name': './stimuli/distractors/cannon_12n.jpg', 'path': './stimuli/distractors/cannon_12n.jpg'},
    {'name': './stimuli/156_2.jpg', 'path': './stimuli/156_2.jpg'},
    {'name': './stimuli/156_3.jpg', 'path': './stimuli/156_3.jpg'},
    {'name': './stimuli/156_1.jpg', 'path': './stimuli/156_1.jpg'},
    {'name': './stimuli/distractors/pie_15s.jpg', 'path': './stimuli/distractors/pie_15s.jpg'},
    {'name': './stimuli/distractors/pie_08s.jpg', 'path': './stimuli/distractors/pie_08s.jpg'},
    {'name': './stimuli/distractors/car_seat_08s.jpg', 'path': './stimuli/distractors/car_seat_08s.jpg'},
    {'name': './stimuli/distractors/car_seat_04s.jpg', 'path': './stimuli/distractors/car_seat_04s.jpg'},
    {'name': './stimuli/203_2.jpg', 'path': './stimuli/203_2.jpg'},
    {'name': './stimuli/203_3.jpg', 'path': './stimuli/203_3.jpg'},
    {'name': './stimuli/203_1.jpg', 'path': './stimuli/203_1.jpg'},
    {'name': './stimuli/distractors/walrus_12s.jpg', 'path': './stimuli/distractors/walrus_12s.jpg'},
    {'name': './stimuli/distractors/walrus_13s.jpg', 'path': './stimuli/distractors/walrus_13s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_05s.jpg', 'path': './stimuli/distractors/hot-air_balloon_05s.jpg'},
    {'name': './stimuli/distractors/hot-air_balloon_01b.jpg', 'path': './stimuli/distractors/hot-air_balloon_01b.jpg'},
    {'name': './stimuli/98_2.jpg', 'path': './stimuli/98_2.jpg'},
    {'name': './stimuli/98_3.jpg', 'path': './stimuli/98_3.jpg'},
    {'name': './stimuli/98_1.jpg', 'path': './stimuli/98_1.jpg'},
    {'name': './stimuli/distractors/roof_rack_09s.jpg', 'path': './stimuli/distractors/roof_rack_09s.jpg'},
    {'name': './stimuli/distractors/roof_rack_10s.jpg', 'path': './stimuli/distractors/roof_rack_10s.jpg'},
    {'name': './stimuli/distractors/grapefruit_09s.jpg', 'path': './stimuli/distractors/grapefruit_09s.jpg'},
    {'name': './stimuli/distractors/grapefruit_17n.jpg', 'path': './stimuli/distractors/grapefruit_17n.jpg'},
    {'name': './stimuli/273_2.jpg', 'path': './stimuli/273_2.jpg'},
    {'name': './stimuli/273_3.jpg', 'path': './stimuli/273_3.jpg'},
    {'name': './stimuli/273_1.jpg', 'path': './stimuli/273_1.jpg'},
    {'name': './stimuli/distractors/quad_05s.jpg', 'path': './stimuli/distractors/quad_05s.jpg'},
    {'name': './stimuli/distractors/quad_06s.jpg', 'path': './stimuli/distractors/quad_06s.jpg'},
    {'name': './stimuli/distractors/flower_10s.jpg', 'path': './stimuli/distractors/flower_10s.jpg'},
    {'name': './stimuli/distractors/flower_02s.jpg', 'path': './stimuli/distractors/flower_02s.jpg'},
    {'name': './stimuli/132_2.jpg', 'path': './stimuli/132_2.jpg'},
    {'name': './stimuli/132_3.jpg', 'path': './stimuli/132_3.jpg'},
    {'name': './stimuli/132_1.jpg', 'path': './stimuli/132_1.jpg'},
    {'name': './stimuli/distractors/arch_05s.jpg', 'path': './stimuli/distractors/arch_05s.jpg'},
    {'name': './stimuli/distractors/arch_02s.jpg', 'path': './stimuli/distractors/arch_02s.jpg'},
    {'name': './stimuli/distractors/ribbon_14s.jpg', 'path': './stimuli/distractors/ribbon_14s.jpg'},
    {'name': './stimuli/distractors/ribbon_08s.jpg', 'path': './stimuli/distractors/ribbon_08s.jpg'},
    {'name': './stimuli/6_2.jpg', 'path': './stimuli/6_2.jpg'},
    {'name': './stimuli/6_3.jpg', 'path': './stimuli/6_3.jpg'},
    {'name': './stimuli/6_1.jpg', 'path': './stimuli/6_1.jpg'},
    {'name': './stimuli/distractors/ice_14s.jpg', 'path': './stimuli/distractors/ice_14s.jpg'},
    {'name': './stimuli/distractors/ice_13s.jpg', 'path': './stimuli/distractors/ice_13s.jpg'},
    {'name': './stimuli/distractors/shelf_11s.jpg', 'path': './stimuli/distractors/shelf_11s.jpg'},
    {'name': './stimuli/distractors/shelf_12s.jpg', 'path': './stimuli/distractors/shelf_12s.jpg'},
    {'name': './stimuli/201_2.jpg', 'path': './stimuli/201_2.jpg'},
    {'name': './stimuli/201_3.jpg', 'path': './stimuli/201_3.jpg'},
    {'name': './stimuli/201_1.jpg', 'path': './stimuli/201_1.jpg'},
    {'name': './stimuli/distractors/rattlesnake_12s.jpg', 'path': './stimuli/distractors/rattlesnake_12s.jpg'},
    {'name': './stimuli/distractors/rattlesnake_13s.jpg', 'path': './stimuli/distractors/rattlesnake_13s.jpg'},
    {'name': './stimuli/distractors/radish_12s.jpg', 'path': './stimuli/distractors/radish_12s.jpg'},
    {'name': './stimuli/distractors/radish_09s.jpg', 'path': './stimuli/distractors/radish_09s.jpg'},
    {'name': './stimuli/121_2.jpg', 'path': './stimuli/121_2.jpg'},
    {'name': './stimuli/121_3.jpg', 'path': './stimuli/121_3.jpg'},
    {'name': './stimuli/121_1.jpg', 'path': './stimuli/121_1.jpg'},
    {'name': './stimuli/distractors/truck_08s.jpg', 'path': './stimuli/distractors/truck_08s.jpg'},
    {'name': './stimuli/distractors/truck_07s.jpg', 'path': './stimuli/distractors/truck_07s.jpg'},
    {'name': './stimuli/distractors/napkin_02s.jpg', 'path': './stimuli/distractors/napkin_02s.jpg'},
    {'name': './stimuli/distractors/napkin_09s.jpg', 'path': './stimuli/distractors/napkin_09s.jpg'},
    {'name': './stimuli/251_2.jpg', 'path': './stimuli/251_2.jpg'},
    {'name': './stimuli/251_3.jpg', 'path': './stimuli/251_3.jpg'},
    {'name': './stimuli/251_1.jpg', 'path': './stimuli/251_1.jpg'},
    {'name': './stimuli/distractors/guinea_pig_05s.jpg', 'path': './stimuli/distractors/guinea_pig_05s.jpg'},
    {'name': './stimuli/distractors/guinea_pig_01b.jpg', 'path': './stimuli/distractors/guinea_pig_01b.jpg'},
    {'name': './stimuli/distractors/ukulele_04s.jpg', 'path': './stimuli/distractors/ukulele_04s.jpg'},
    {'name': './stimuli/distractors/ukulele_08s.jpg', 'path': './stimuli/distractors/ukulele_08s.jpg'},
    {'name': './stimuli/34_2.jpg', 'path': './stimuli/34_2.jpg'},
    {'name': './stimuli/34_3.jpg', 'path': './stimuli/34_3.jpg'},
    {'name': './stimuli/34_1.jpg', 'path': './stimuli/34_1.jpg'},
    {'name': './stimuli/distractors/loincloth_08s.jpg', 'path': './stimuli/distractors/loincloth_08s.jpg'},
    {'name': './stimuli/distractors/loincloth_05s.jpg', 'path': './stimuli/distractors/loincloth_05s.jpg'},
    {'name': './stimuli/distractors/paper_plate_07s.jpg', 'path': './stimuli/distractors/paper_plate_07s.jpg'},
    {'name': './stimuli/distractors/paper_plate_03s.jpg', 'path': './stimuli/distractors/paper_plate_03s.jpg'},
    {'name': './stimuli/285_2.jpg', 'path': './stimuli/285_2.jpg'},
    {'name': './stimuli/285_3.jpg', 'path': './stimuli/285_3.jpg'},
    {'name': './stimuli/285_1.jpg', 'path': './stimuli/285_1.jpg'},
    {'name': './stimuli/distractors/bunkbed_09s.jpg', 'path': './stimuli/distractors/bunkbed_09s.jpg'},
    {'name': './stimuli/distractors/bunkbed_12s.jpg', 'path': './stimuli/distractors/bunkbed_12s.jpg'},
    {'name': './stimuli/distractors/dandelion_07s.jpg', 'path': './stimuli/distractors/dandelion_07s.jpg'},
    {'name': './stimuli/distractors/dandelion_01s.jpg', 'path': './stimuli/distractors/dandelion_01s.jpg'},
    {'name': './stimuli/153_2.jpg', 'path': './stimuli/153_2.jpg'},
    {'name': './stimuli/153_3.jpg', 'path': './stimuli/153_3.jpg'},
    {'name': './stimuli/153_1.jpg', 'path': './stimuli/153_1.jpg'},
    {'name': './stimuli/distractors/duckling_08s.jpg', 'path': './stimuli/distractors/duckling_08s.jpg'},
    {'name': './stimuli/distractors/duckling_14s.jpg', 'path': './stimuli/distractors/duckling_14s.jpg'},
    {'name': './stimuli/distractors/ink_05s.jpg', 'path': './stimuli/distractors/ink_05s.jpg'},
    {'name': './stimuli/distractors/ink_01b.jpg', 'path': './stimuli/distractors/ink_01b.jpg'},
    {'name': './stimuli/207_2.jpg', 'path': './stimuli/207_2.jpg'},
    {'name': './stimuli/207_3.jpg', 'path': './stimuli/207_3.jpg'},
    {'name': './stimuli/207_1.jpg', 'path': './stimuli/207_1.jpg'},
    {'name': './stimuli/distractors/chisel_16s.jpg', 'path': './stimuli/distractors/chisel_16s.jpg'},
    {'name': './stimuli/distractors/chisel_14s.jpg', 'path': './stimuli/distractors/chisel_14s.jpg'},
    {'name': './stimuli/distractors/arrow_08s.jpg', 'path': './stimuli/distractors/arrow_08s.jpg'},
    {'name': './stimuli/distractors/arrow_12s.jpg', 'path': './stimuli/distractors/arrow_12s.jpg'},
    {'name': './stimuli/56_2.jpg', 'path': './stimuli/56_2.jpg'},
    {'name': './stimuli/56_3.jpg', 'path': './stimuli/56_3.jpg'},
    {'name': './stimuli/56_1.jpg', 'path': './stimuli/56_1.jpg'},
    {'name': './stimuli/distractors/ant_08s.jpg', 'path': './stimuli/distractors/ant_08s.jpg'},
    {'name': './stimuli/distractors/ant_11s.jpg', 'path': './stimuli/distractors/ant_11s.jpg'},
    {'name': './stimuli/distractors/pulley_04s.jpg', 'path': './stimuli/distractors/pulley_04s.jpg'},
    {'name': './stimuli/distractors/pulley_02s.jpg', 'path': './stimuli/distractors/pulley_02s.jpg'},
    {'name': './stimuli/162_2.jpg', 'path': './stimuli/162_2.jpg'},
    {'name': './stimuli/162_3.jpg', 'path': './stimuli/162_3.jpg'},
    {'name': './stimuli/162_1.jpg', 'path': './stimuli/162_1.jpg'},
    {'name': './stimuli/distractors/bun_06s.jpg', 'path': './stimuli/distractors/bun_06s.jpg'},
    {'name': './stimuli/distractors/bun_09s.jpg', 'path': './stimuli/distractors/bun_09s.jpg'},
    {'name': './stimuli/distractors/crane_05s.jpg', 'path': './stimuli/distractors/crane_05s.jpg'},
    {'name': './stimuli/distractors/crane_18s.jpg', 'path': './stimuli/distractors/crane_18s.jpg'},
    {'name': './stimuli/185_2.jpg', 'path': './stimuli/185_2.jpg'},
    {'name': './stimuli/185_3.jpg', 'path': './stimuli/185_3.jpg'},
    {'name': './stimuli/185_1.jpg', 'path': './stimuli/185_1.jpg'},
    {'name': './stimuli/distractors/trolley_14s.jpg', 'path': './stimuli/distractors/trolley_14s.jpg'},
    {'name': './stimuli/distractors/trolley_11s.jpg', 'path': './stimuli/distractors/trolley_11s.jpg'},
    {'name': './stimuli/distractors/washcloth_03s.jpg', 'path': './stimuli/distractors/washcloth_03s.jpg'},
    {'name': './stimuli/distractors/washcloth_01b.jpg', 'path': './stimuli/distractors/washcloth_01b.jpg'},
    {'name': './stimuli/42_2.jpg', 'path': './stimuli/42_2.jpg'},
    {'name': './stimuli/42_3.jpg', 'path': './stimuli/42_3.jpg'},
    {'name': './stimuli/42_1.jpg', 'path': './stimuli/42_1.jpg'},
    {'name': './stimuli/distractors/snowmobile_08s.jpg', 'path': './stimuli/distractors/snowmobile_08s.jpg'},
    {'name': './stimuli/distractors/snowmobile_09s.jpg', 'path': './stimuli/distractors/snowmobile_09s.jpg'},
    {'name': './stimuli/distractors/peanut_08s.jpg', 'path': './stimuli/distractors/peanut_08s.jpg'},
    {'name': './stimuli/distractors/peanut_03s.jpg', 'path': './stimuli/distractors/peanut_03s.jpg'},
    {'name': './stimuli/22_2.jpg', 'path': './stimuli/22_2.jpg'},
    {'name': './stimuli/22_3.jpg', 'path': './stimuli/22_3.jpg'},
    {'name': './stimuli/22_1.jpg', 'path': './stimuli/22_1.jpg'},
    {'name': './stimuli/distractors/wetsuit_10s.jpg', 'path': './stimuli/distractors/wetsuit_10s.jpg'},
    {'name': './stimuli/distractors/wetsuit_09s.jpg', 'path': './stimuli/distractors/wetsuit_09s.jpg'},
    {'name': './stimuli/distractors/radar_10s.jpg', 'path': './stimuli/distractors/radar_10s.jpg'},
    {'name': './stimuli/distractors/radar_07s.jpg', 'path': './stimuli/distractors/radar_07s.jpg'},
    {'name': './stimuli/260_2.jpg', 'path': './stimuli/260_2.jpg'},
    {'name': './stimuli/260_3.jpg', 'path': './stimuli/260_3.jpg'},
    {'name': './stimuli/260_1.jpg', 'path': './stimuli/260_1.jpg'},
    {'name': './stimuli/distractors/alligator_06s.jpg', 'path': './stimuli/distractors/alligator_06s.jpg'},
    {'name': './stimuli/distractors/alligator_13n.jpg', 'path': './stimuli/distractors/alligator_13n.jpg'},
    {'name': './stimuli/distractors/fountain_pen_05s.jpg', 'path': './stimuli/distractors/fountain_pen_05s.jpg'},
    {'name': './stimuli/distractors/fountain_pen_01b.jpg', 'path': './stimuli/distractors/fountain_pen_01b.jpg'},
    {'name': './stimuli/189_2.jpg', 'path': './stimuli/189_2.jpg'},
    {'name': './stimuli/189_3.jpg', 'path': './stimuli/189_3.jpg'},
    {'name': './stimuli/189_1.jpg', 'path': './stimuli/189_1.jpg'},
    {'name': './stimuli/distractors/moose_05s.jpg', 'path': './stimuli/distractors/moose_05s.jpg'},
    {'name': './stimuli/distractors/moose_12s.jpg', 'path': './stimuli/distractors/moose_12s.jpg'},
    {'name': './stimuli/distractors/scooter_04s.jpg', 'path': './stimuli/distractors/scooter_04s.jpg'},
    {'name': './stimuli/distractors/scooter_13s.jpg', 'path': './stimuli/distractors/scooter_13s.jpg'},
    {'name': './stimuli/292_2.jpg', 'path': './stimuli/292_2.jpg'},
    {'name': './stimuli/292_3.jpg', 'path': './stimuli/292_3.jpg'},
    {'name': './stimuli/292_1.jpg', 'path': './stimuli/292_1.jpg'},
    {'name': './stimuli/distractors/crucifix_10s.jpg', 'path': './stimuli/distractors/crucifix_10s.jpg'},
    {'name': './stimuli/distractors/crucifix_05s.jpg', 'path': './stimuli/distractors/crucifix_05s.jpg'},
    {'name': './stimuli/distractors/grapefruit_06s.jpg', 'path': './stimuli/distractors/grapefruit_06s.jpg'},
    {'name': './stimuli/distractors/grapefruit_16n.jpg', 'path': './stimuli/distractors/grapefruit_16n.jpg'},
    {'name': './stimuli/216_2.jpg', 'path': './stimuli/216_2.jpg'},
    {'name': './stimuli/216_3.jpg', 'path': './stimuli/216_3.jpg'},
    {'name': './stimuli/216_1.jpg', 'path': './stimuli/216_1.jpg'},
    {'name': './stimuli/distractors/hole_07s.jpg', 'path': './stimuli/distractors/hole_07s.jpg'},
    {'name': './stimuli/distractors/hole_13s.jpg', 'path': './stimuli/distractors/hole_13s.jpg'},
    {'name': './stimuli/distractors/mold1_04s.jpg', 'path': './stimuli/distractors/mold1_04s.jpg'},
    {'name': './stimuli/distractors/mold1_01b.jpg', 'path': './stimuli/distractors/mold1_01b.jpg'},
    {'name': './stimuli/95_2.jpg', 'path': './stimuli/95_2.jpg'},
    {'name': './stimuli/95_3.jpg', 'path': './stimuli/95_3.jpg'},
    {'name': './stimuli/95_1.jpg', 'path': './stimuli/95_1.jpg'},
    {'name': './stimuli/distractors/satellite_12s.jpg', 'path': './stimuli/distractors/satellite_12s.jpg'},
    {'name': './stimuli/distractors/satellite_09s.jpg', 'path': './stimuli/distractors/satellite_09s.jpg'},
    {'name': './stimuli/distractors/teacup_12s.jpg', 'path': './stimuli/distractors/teacup_12s.jpg'},
    {'name': './stimuli/distractors/teacup_04s.jpg', 'path': './stimuli/distractors/teacup_04s.jpg'},
    {'name': './stimuli/30_2.jpg', 'path': './stimuli/30_2.jpg'},
    {'name': './stimuli/30_3.jpg', 'path': './stimuli/30_3.jpg'},
    {'name': './stimuli/30_1.jpg', 'path': './stimuli/30_1.jpg'},
    {'name': './stimuli/distractors/hawk_17s.jpg', 'path': './stimuli/distractors/hawk_17s.jpg'},
    {'name': './stimuli/distractors/hawk_10s.jpg', 'path': './stimuli/distractors/hawk_10s.jpg'},
    {'name': './stimuli/distractors/lamb_chop_17s.jpg', 'path': './stimuli/distractors/lamb_chop_17s.jpg'},
    {'name': './stimuli/distractors/lamb_chop_08s.jpg', 'path': './stimuli/distractors/lamb_chop_08s.jpg'},
    {'name': './stimuli/252_2.jpg', 'path': './stimuli/252_2.jpg'},
    {'name': './stimuli/252_3.jpg', 'path': './stimuli/252_3.jpg'},
    {'name': './stimuli/252_1.jpg', 'path': './stimuli/252_1.jpg'},
    {'name': './stimuli/distractors/stingray_12s.jpg', 'path': './stimuli/distractors/stingray_12s.jpg'},
    {'name': './stimuli/distractors/stingray_09s.jpg', 'path': './stimuli/distractors/stingray_09s.jpg'},
    {'name': './stimuli/distractors/megaphone_11s.jpg', 'path': './stimuli/distractors/megaphone_11s.jpg'},
    {'name': './stimuli/distractors/megaphone_06s.jpg', 'path': './stimuli/distractors/megaphone_06s.jpg'},
    {'name': './stimuli/91_2.jpg', 'path': './stimuli/91_2.jpg'},
    {'name': './stimuli/91_3.jpg', 'path': './stimuli/91_3.jpg'},
    {'name': './stimuli/91_1.jpg', 'path': './stimuli/91_1.jpg'},
    {'name': './stimuli/distractors/garbage_truck_05s.jpg', 'path': './stimuli/distractors/garbage_truck_05s.jpg'},
    {'name': './stimuli/distractors/garbage_truck_08s.jpg', 'path': './stimuli/distractors/garbage_truck_08s.jpg'},
    {'name': './stimuli/distractors/clasp_10s.jpg', 'path': './stimuli/distractors/clasp_10s.jpg'},
    {'name': './stimuli/distractors/clasp_11s.jpg', 'path': './stimuli/distractors/clasp_11s.jpg'},
    {'name': './stimuli/233_2.jpg', 'path': './stimuli/233_2.jpg'},
    {'name': './stimuli/233_3.jpg', 'path': './stimuli/233_3.jpg'},
    {'name': './stimuli/233_1.jpg', 'path': './stimuli/233_1.jpg'},
    {'name': './stimuli/distractors/rattlesnake_15s.jpg', 'path': './stimuli/distractors/rattlesnake_15s.jpg'},
    {'name': './stimuli/distractors/rattlesnake_06s.jpg', 'path': './stimuli/distractors/rattlesnake_06s.jpg'},
    {'name': './stimuli/distractors/sundae_05s.jpg', 'path': './stimuli/distractors/sundae_05s.jpg'},
    {'name': './stimuli/distractors/sundae_12s.jpg', 'path': './stimuli/distractors/sundae_12s.jpg'},
    {'name': './stimuli/294_2.jpg', 'path': './stimuli/294_2.jpg'},
    {'name': './stimuli/294_3.jpg', 'path': './stimuli/294_3.jpg'},
    {'name': './stimuli/294_1.jpg', 'path': './stimuli/294_1.jpg'},
    {'name': './stimuli/distractors/branch_04s.jpg', 'path': './stimuli/distractors/branch_04s.jpg'},
    {'name': './stimuli/distractors/branch_13s.jpg', 'path': './stimuli/distractors/branch_13s.jpg'},
    {'name': './stimuli/distractors/washcloth_09s.jpg', 'path': './stimuli/distractors/washcloth_09s.jpg'},
    {'name': './stimuli/distractors/washcloth_07s.jpg', 'path': './stimuli/distractors/washcloth_07s.jpg'},
    {'name': './stimuli/44_2.jpg', 'path': './stimuli/44_2.jpg'},
    {'name': './stimuli/44_3.jpg', 'path': './stimuli/44_3.jpg'},
    {'name': './stimuli/44_1.jpg', 'path': './stimuli/44_1.jpg'},
    {'name': './stimuli/distractors/ram_04s.jpg', 'path': './stimuli/distractors/ram_04s.jpg'},
    {'name': './stimuli/distractors/ram_05s.jpg', 'path': './stimuli/distractors/ram_05s.jpg'},
    {'name': './stimuli/distractors/bracelet2_17s.jpg', 'path': './stimuli/distractors/bracelet2_17s.jpg'},
    {'name': './stimuli/distractors/bracelet2_09s.jpg', 'path': './stimuli/distractors/bracelet2_09s.jpg'},
    {'name': './stimuli/286_2.jpg', 'path': './stimuli/286_2.jpg'},
    {'name': './stimuli/286_3.jpg', 'path': './stimuli/286_3.jpg'},
    {'name': './stimuli/286_1.jpg', 'path': './stimuli/286_1.jpg'},
    {'name': './stimuli/distractors/vulture_03s.jpg', 'path': './stimuli/distractors/vulture_03s.jpg'},
    {'name': './stimuli/distractors/vulture_12s.jpg', 'path': './stimuli/distractors/vulture_12s.jpg'},
    {'name': './stimuli/distractors/magnet_03s.jpg', 'path': './stimuli/distractors/magnet_03s.jpg'},
    {'name': './stimuli/distractors/magnet_04s.jpg', 'path': './stimuli/distractors/magnet_04s.jpg'},
    {'name': './stimuli/83_2.jpg', 'path': './stimuli/83_2.jpg'},
    {'name': './stimuli/83_3.jpg', 'path': './stimuli/83_3.jpg'},
    {'name': './stimuli/83_1.jpg', 'path': './stimuli/83_1.jpg'},
    {'name': './stimuli/distractors/slug_06s.jpg', 'path': './stimuli/distractors/slug_06s.jpg'},
    {'name': './stimuli/distractors/slug_08s.jpg', 'path': './stimuli/distractors/slug_08s.jpg'},
    {'name': './stimuli/distractors/treadmill_03s.jpg', 'path': './stimuli/distractors/treadmill_03s.jpg'},
    {'name': './stimuli/distractors/treadmill_11s.jpg', 'path': './stimuli/distractors/treadmill_11s.jpg'},
    {'name': './stimuli/60_2.jpg', 'path': './stimuli/60_2.jpg'},
    {'name': './stimuli/60_3.jpg', 'path': './stimuli/60_3.jpg'},
    {'name': './stimuli/60_1.jpg', 'path': './stimuli/60_1.jpg'},
    {'name': './stimuli/distractors/calf1_03s.jpg', 'path': './stimuli/distractors/calf1_03s.jpg'},
    {'name': './stimuli/distractors/calf1_14s.jpg', 'path': './stimuli/distractors/calf1_14s.jpg'},
    {'name': './stimuli/distractors/shoelace_08s.jpg', 'path': './stimuli/distractors/shoelace_08s.jpg'},
    {'name': './stimuli/distractors/shoelace_01b.jpg', 'path': './stimuli/distractors/shoelace_01b.jpg'},
    {'name': './stimuli/200_2.jpg', 'path': './stimuli/200_2.jpg'},
    {'name': './stimuli/200_3.jpg', 'path': './stimuli/200_3.jpg'},
    {'name': './stimuli/200_1.jpg', 'path': './stimuli/200_1.jpg'},
    {'name': './stimuli/distractors/match_09s.jpg', 'path': './stimuli/distractors/match_09s.jpg'},
    {'name': './stimuli/distractors/match_12s.jpg', 'path': './stimuli/distractors/match_12s.jpg'},
    {'name': './stimuli/distractors/mouthpiece_07s.jpg', 'path': './stimuli/distractors/mouthpiece_07s.jpg'},
    {'name': './stimuli/distractors/mouthpiece_09s.jpg', 'path': './stimuli/distractors/mouthpiece_09s.jpg'},
    {'name': './stimuli/47_2.jpg', 'path': './stimuli/47_2.jpg'},
    {'name': './stimuli/47_3.jpg', 'path': './stimuli/47_3.jpg'},
    {'name': './stimuli/47_1.jpg', 'path': './stimuli/47_1.jpg'},
    {'name': './stimuli/distractors/zebra_20s.jpg', 'path': './stimuli/distractors/zebra_20s.jpg'},
    {'name': './stimuli/distractors/zebra_01b.jpg', 'path': './stimuli/distractors/zebra_01b.jpg'},
    {'name': './stimuli/distractors/razor_blade_02s.jpg', 'path': './stimuli/distractors/razor_blade_02s.jpg'},
    {'name': './stimuli/distractors/razor_blade_11s.jpg', 'path': './stimuli/distractors/razor_blade_11s.jpg'},
    {'name': './stimuli/5_2.jpg', 'path': './stimuli/5_2.jpg'},
    {'name': './stimuli/5_3.jpg', 'path': './stimuli/5_3.jpg'},
    {'name': './stimuli/5_1.jpg', 'path': './stimuli/5_1.jpg'},
    {'name': './stimuli/distractors/duckling_11s.jpg', 'path': './stimuli/distractors/duckling_11s.jpg'},
    {'name': './stimuli/distractors/duckling_04s.jpg', 'path': './stimuli/distractors/duckling_04s.jpg'},
    {'name': './stimuli/distractors/stove1_05s.jpg', 'path': './stimuli/distractors/stove1_05s.jpg'},
    {'name': './stimuli/distractors/stove1_10s.jpg', 'path': './stimuli/distractors/stove1_10s.jpg'},
    {'name': './stimuli/284_2.jpg', 'path': './stimuli/284_2.jpg'},
    {'name': './stimuli/284_3.jpg', 'path': './stimuli/284_3.jpg'},
    {'name': './stimuli/284_1.jpg', 'path': './stimuli/284_1.jpg'},
    {'name': './stimuli/distractors/jacket_02s.jpg', 'path': './stimuli/distractors/jacket_02s.jpg'},
    {'name': './stimuli/distractors/jacket_15s.jpg', 'path': './stimuli/distractors/jacket_15s.jpg'},
    {'name': './stimuli/distractors/sparkler_01b.jpg', 'path': './stimuli/distractors/sparkler_01b.jpg'},
    {'name': './stimuli/distractors/sparkler_14s.jpg', 'path': './stimuli/distractors/sparkler_14s.jpg'},
    {'name': './stimuli/118_2.jpg', 'path': './stimuli/118_2.jpg'},
    {'name': './stimuli/118_3.jpg', 'path': './stimuli/118_3.jpg'},
    {'name': './stimuli/118_1.jpg', 'path': './stimuli/118_1.jpg'},
    {'name': './stimuli/distractors/bell_14n.jpg', 'path': './stimuli/distractors/bell_14n.jpg'},
    {'name': './stimuli/distractors/bell_10s.jpg', 'path': './stimuli/distractors/bell_10s.jpg'},
    {'name': './stimuli/distractors/cilantro_12s.jpg', 'path': './stimuli/distractors/cilantro_12s.jpg'},
    {'name': './stimuli/distractors/cilantro_03s.jpg', 'path': './stimuli/distractors/cilantro_03s.jpg'},
    {'name': './stimuli/154_2.jpg', 'path': './stimuli/154_2.jpg'},
    {'name': './stimuli/154_3.jpg', 'path': './stimuli/154_3.jpg'},
    {'name': './stimuli/154_1.jpg', 'path': './stimuli/154_1.jpg'},
    {'name': './stimuli/distractors/trolley_02s.jpg', 'path': './stimuli/distractors/trolley_02s.jpg'},
    {'name': './stimuli/distractors/trolley_08s.jpg', 'path': './stimuli/distractors/trolley_08s.jpg'},
    {'name': './stimuli/distractors/ketchup_14s.jpg', 'path': './stimuli/distractors/ketchup_14s.jpg'},
    {'name': './stimuli/distractors/ketchup_01b.jpg', 'path': './stimuli/distractors/ketchup_01b.jpg'},
    {'name': './stimuli/2_2.jpg', 'path': './stimuli/2_2.jpg'},
    {'name': './stimuli/2_3.jpg', 'path': './stimuli/2_3.jpg'},
    {'name': './stimuli/2_1.jpg', 'path': './stimuli/2_1.jpg'},
    {'name': './stimuli/distractors/calzone_09s.jpg', 'path': './stimuli/distractors/calzone_09s.jpg'},
    {'name': './stimuli/distractors/calzone_10s.jpg', 'path': './stimuli/distractors/calzone_10s.jpg'},
    {'name': './stimuli/distractors/lip_balm_04s.jpg', 'path': './stimuli/distractors/lip_balm_04s.jpg'},
    {'name': './stimuli/distractors/lip_balm_09s.jpg', 'path': './stimuli/distractors/lip_balm_09s.jpg'},
    {'name': './stimuli/74_2.jpg', 'path': './stimuli/74_2.jpg'},
    {'name': './stimuli/74_3.jpg', 'path': './stimuli/74_3.jpg'},
    {'name': './stimuli/74_1.jpg', 'path': './stimuli/74_1.jpg'},
    {'name': './stimuli/distractors/thermostat_07s.jpg', 'path': './stimuli/distractors/thermostat_07s.jpg'},
    {'name': './stimuli/distractors/thermostat_03s.jpg', 'path': './stimuli/distractors/thermostat_03s.jpg'},
    {'name': './stimuli/distractors/aircraft_carrier_16s.jpg', 'path': './stimuli/distractors/aircraft_carrier_16s.jpg'},
    {'name': './stimuli/distractors/aircraft_carrier_03s.jpg', 'path': './stimuli/distractors/aircraft_carrier_03s.jpg'},
    {'name': './stimuli/39_2.jpg', 'path': './stimuli/39_2.jpg'},
    {'name': './stimuli/39_3.jpg', 'path': './stimuli/39_3.jpg'},
    {'name': './stimuli/39_1.jpg', 'path': './stimuli/39_1.jpg'},
    {'name': './stimuli/distractors/fingerprint_04s.jpg', 'path': './stimuli/distractors/fingerprint_04s.jpg'},
    {'name': './stimuli/distractors/fingerprint_06s.jpg', 'path': './stimuli/distractors/fingerprint_06s.jpg'},
    {'name': './stimuli/distractors/stir_fry_19s.jpg', 'path': './stimuli/distractors/stir_fry_19s.jpg'},
    {'name': './stimuli/distractors/stir_fry_12s.jpg', 'path': './stimuli/distractors/stir_fry_12s.jpg'},
    {'name': './stimuli/194_2.jpg', 'path': './stimuli/194_2.jpg'},
    {'name': './stimuli/194_3.jpg', 'path': './stimuli/194_3.jpg'},
    {'name': './stimuli/194_1.jpg', 'path': './stimuli/194_1.jpg'},
    {'name': './stimuli/distractors/leaf_05s.jpg', 'path': './stimuli/distractors/leaf_05s.jpg'},
    {'name': './stimuli/distractors/leaf_12s.jpg', 'path': './stimuli/distractors/leaf_12s.jpg'},
    {'name': './stimuli/distractors/sailboat_05s.jpg', 'path': './stimuli/distractors/sailboat_05s.jpg'},
    {'name': './stimuli/distractors/sailboat_04s.jpg', 'path': './stimuli/distractors/sailboat_04s.jpg'},
    {'name': './stimuli/92_2.jpg', 'path': './stimuli/92_2.jpg'},
    {'name': './stimuli/92_3.jpg', 'path': './stimuli/92_3.jpg'},
    {'name': './stimuli/92_1.jpg', 'path': './stimuli/92_1.jpg'},
    {'name': './stimuli/distractors/tiramisu_10s.jpg', 'path': './stimuli/distractors/tiramisu_10s.jpg'},
    {'name': './stimuli/distractors/tiramisu_16s.jpg', 'path': './stimuli/distractors/tiramisu_16s.jpg'},
    {'name': './stimuli/distractors/rhinoceros_03s.jpg', 'path': './stimuli/distractors/rhinoceros_03s.jpg'},
    {'name': './stimuli/distractors/rhinoceros_10s.jpg', 'path': './stimuli/distractors/rhinoceros_10s.jpg'},
    {'name': './stimuli/261_2.jpg', 'path': './stimuli/261_2.jpg'},
    {'name': './stimuli/261_3.jpg', 'path': './stimuli/261_3.jpg'},
    {'name': './stimuli/261_1.jpg', 'path': './stimuli/261_1.jpg'},
    {'name': './stimuli/distractors/slot_machine_01b.jpg', 'path': './stimuli/distractors/slot_machine_01b.jpg'},
    {'name': './stimuli/distractors/slot_machine_15s.jpg', 'path': './stimuli/distractors/slot_machine_15s.jpg'},
    {'name': './stimuli/distractors/beetle_04s.jpg', 'path': './stimuli/distractors/beetle_04s.jpg'},
    {'name': './stimuli/distractors/beetle_09s.jpg', 'path': './stimuli/distractors/beetle_09s.jpg'},
    {'name': './stimuli/217_2.jpg', 'path': './stimuli/217_2.jpg'},
    {'name': './stimuli/217_3.jpg', 'path': './stimuli/217_3.jpg'},
    {'name': './stimuli/217_1.jpg', 'path': './stimuli/217_1.jpg'},
    {'name': './stimuli/distractors/fingerprint_02s.jpg', 'path': './stimuli/distractors/fingerprint_02s.jpg'},
    {'name': './stimuli/distractors/fingerprint_09s.jpg', 'path': './stimuli/distractors/fingerprint_09s.jpg'},
    {'name': './stimuli/distractors/chalk_11s.jpg', 'path': './stimuli/distractors/chalk_11s.jpg'},
    {'name': './stimuli/distractors/chalk_06s.jpg', 'path': './stimuli/distractors/chalk_06s.jpg'},
    {'name': './stimuli/231_2.jpg', 'path': './stimuli/231_2.jpg'},
    {'name': './stimuli/231_3.jpg', 'path': './stimuli/231_3.jpg'},
    {'name': './stimuli/231_1.jpg', 'path': './stimuli/231_1.jpg'},
    {'name': './stimuli/distractors/cactus_08n.jpg', 'path': './stimuli/distractors/cactus_08n.jpg'},
    {'name': './stimuli/distractors/cactus_05n.jpg', 'path': './stimuli/distractors/cactus_05n.jpg'},
    {'name': './stimuli/distractors/gun_10s.jpg', 'path': './stimuli/distractors/gun_10s.jpg'},
    {'name': './stimuli/distractors/gun_11s.jpg', 'path': './stimuli/distractors/gun_11s.jpg'},
    {'name': './stimuli/90_2.jpg', 'path': './stimuli/90_2.jpg'},
    {'name': './stimuli/90_3.jpg', 'path': './stimuli/90_3.jpg'},
    {'name': './stimuli/90_1.jpg', 'path': './stimuli/90_1.jpg'},
    {'name': './stimuli/distractors/flamethrower_02s.jpg', 'path': './stimuli/distractors/flamethrower_02s.jpg'},
    {'name': './stimuli/distractors/flamethrower_03s.jpg', 'path': './stimuli/distractors/flamethrower_03s.jpg'},
    {'name': './stimuli/distractors/pasta_04s.jpg', 'path': './stimuli/distractors/pasta_04s.jpg'},
    {'name': './stimuli/distractors/pasta_10s.jpg', 'path': './stimuli/distractors/pasta_10s.jpg'},
    {'name': './resources/taskPhases_1.csv', 'path': './resources/taskPhases_1.csv'},
    {'name': './resources/conditions_file_1.csv', 'path': './resources/conditions_file_1.csv'},
    {'name': './resources/taskPhases_2.csv', 'path': './resources/taskPhases_2.csv'},
    {'name': './resources/conditions_file_2.csv', 'path': './resources/conditions_file_2.csv'},
    {'name': './resources/taskPhases_3.csv', 'path': './resources/taskPhases_3.csv'},
    {'name': './resources/conditions_file_3.csv', 'path': './resources/conditions_file_3.csv'},
    {'name': './resources/taskPhases_4.csv', 'path': './resources/taskPhases_4.csv'},
    {'name': './resources/conditions_file_4.csv', 'path': './resources/conditions_file_4.csv'},
    {'name': './resources/taskPhases_5.csv', 'path': './resources/taskPhases_5.csv'},
    {'name': './resources/conditions_file_5.csv', 'path': './resources/conditions_file_5.csv'},
    {'name': './resources/taskPhases_6.csv', 'path': './resources/taskPhases_6.csv'},
    {'name': './resources/conditions_file_6.csv', 'path': './resources/conditions_file_6.csv'},
    {'name': './resources/taskPhases_7.csv', 'path': './resources/taskPhases_7.csv'},
    {'name': './resources/conditions_file_7.csv', 'path': './resources/conditions_file_7.csv'},
    {'name': './resources/taskPhases_8.csv', 'path': './resources/taskPhases_8.csv'},
    {'name': './resources/conditions_file_8.csv', 'path': './resources/conditions_file_8.csv'},
    {'name': './resources/taskPhases_9.csv', 'path': './resources/taskPhases_9.csv'},
    {'name': './resources/conditions_file_9.csv', 'path': './resources/conditions_file_9.csv'},
    {'name': './resources/taskPhases_10.csv', 'path': './resources/taskPhases_10.csv'},
    {'name': './resources/conditions_file_10.csv', 'path': './resources/conditions_file_10.csv'},
    {'name': 'selected_and_foils.csv', 'path': 'selected_and_foils.csv'},
    {'name': './stimuli/new_foil_stims/sheet_08s.jpg', 'path': './stimuli/new_foil_stims/sheet_08s.jpg'},
    {'name': './stimuli/new_foil_stims/fuse_02s.jpg', 'path': './stimuli/new_foil_stims/fuse_02s.jpg'},
    {'name': './stimuli/263_3.jpg', 'path': './stimuli/263_3.jpg'},
    {'name': './stimuli/new_foil_stims/wafer_06s.jpg', 'path': './stimuli/new_foil_stims/wafer_06s.jpg'},
    {'name': './stimuli/44_1.jpg', 'path': './stimuli/44_1.jpg'},
    {'name': './stimuli/16_2.jpg', 'path': './stimuli/16_2.jpg'},
    {'name': './stimuli/new_foil_stims/kaleidoscope_03s.jpg', 'path': './stimuli/new_foil_stims/kaleidoscope_03s.jpg'},
    {'name': './stimuli/211_1.jpg', 'path': './stimuli/211_1.jpg'},
    {'name': './stimuli/51_3.jpg', 'path': './stimuli/51_3.jpg'},
    {'name': './stimuli/24_1.jpg', 'path': './stimuli/24_1.jpg'},
    {'name': './stimuli/204_2.jpg', 'path': './stimuli/204_2.jpg'},
    {'name': './stimuli/236_1.jpg', 'path': './stimuli/236_1.jpg'},
    {'name': './stimuli/134_1.jpg', 'path': './stimuli/134_1.jpg'},
    {'name': './stimuli/new_foil_stims/router_14s.jpg', 'path': './stimuli/new_foil_stims/router_14s.jpg'},
    {'name': './stimuli/159_2.jpg', 'path': './stimuli/159_2.jpg'},
    {'name': './stimuli/132_1.jpg', 'path': './stimuli/132_1.jpg'},
    {'name': './stimuli/new_foil_stims/chili_06s.jpg', 'path': './stimuli/new_foil_stims/chili_06s.jpg'},
    {'name': './stimuli/44_3.jpg', 'path': './stimuli/44_3.jpg'},
    {'name': './stimuli/162_2.jpg', 'path': './stimuli/162_2.jpg'},
    {'name': './stimuli/295_2.jpg', 'path': './stimuli/295_2.jpg'},
    {'name': './stimuli/132_3.jpg', 'path': './stimuli/132_3.jpg'},
    {'name': './stimuli/new_foil_stims/ball_04s.jpg', 'path': './stimuli/new_foil_stims/ball_04s.jpg'},
    {'name': './stimuli/99_3.jpg', 'path': './stimuli/99_3.jpg'},
    {'name': './stimuli/86_2.jpg', 'path': './stimuli/86_2.jpg'},
    {'name': './stimuli/new_foil_stims/calculator_06s.jpg', 'path': './stimuli/new_foil_stims/calculator_06s.jpg'},
    {'name': './stimuli/298_2.jpg', 'path': './stimuli/298_2.jpg'},
    {'name': './stimuli/new_foil_stims/whistle_05s.jpg', 'path': './stimuli/new_foil_stims/whistle_05s.jpg'},
    {'name': './stimuli/new_foil_stims/sailboat_10s.jpg', 'path': './stimuli/new_foil_stims/sailboat_10s.jpg'},
    {'name': './stimuli/new_foil_stims/filter_12s.jpg', 'path': './stimuli/new_foil_stims/filter_12s.jpg'},
    {'name': './stimuli/new_foil_stims/baklava_05s.jpg', 'path': './stimuli/new_foil_stims/baklava_05s.jpg'},
    {'name': './stimuli/new_foil_stims/cocoon_08s.jpg', 'path': './stimuli/new_foil_stims/cocoon_08s.jpg'},
    {'name': './stimuli/37_1.jpg', 'path': './stimuli/37_1.jpg'},
    {'name': './stimuli/274_1.jpg', 'path': './stimuli/274_1.jpg'},
    {'name': './stimuli/99_1.jpg', 'path': './stimuli/99_1.jpg'},
    {'name': './stimuli/new_foil_stims/broccoli_01b.jpg', 'path': './stimuli/new_foil_stims/broccoli_01b.jpg'},
    {'name': './stimuli/110_1.jpg', 'path': './stimuli/110_1.jpg'},
    {'name': './stimuli/157_2.jpg', 'path': './stimuli/157_2.jpg'},
    {'name': './stimuli/new_foil_stims/washcloth_05s.jpg', 'path': './stimuli/new_foil_stims/washcloth_05s.jpg'},
    {'name': './stimuli/190_2.jpg', 'path': './stimuli/190_2.jpg'},
    {'name': './stimuli/new_foil_stims/tractor_09n.jpg', 'path': './stimuli/new_foil_stims/tractor_09n.jpg'},
    {'name': './stimuli/new_foil_stims/corsage_11s.jpg', 'path': './stimuli/new_foil_stims/corsage_11s.jpg'},
    {'name': './stimuli/new_foil_stims/windowsill_07s.jpg', 'path': './stimuli/new_foil_stims/windowsill_07s.jpg'},
    {'name': './stimuli/261_2.jpg', 'path': './stimuli/261_2.jpg'},
    {'name': './stimuli/new_foil_stims/taxi_17s.jpg', 'path': './stimuli/new_foil_stims/taxi_17s.jpg'},
    {'name': './stimuli/new_foil_stims/plaster_cast_11s.jpg', 'path': './stimuli/new_foil_stims/plaster_cast_11s.jpg'},
    {'name': './stimuli/192_2.jpg', 'path': './stimuli/192_2.jpg'},
    {'name': './stimuli/187_2.jpg', 'path': './stimuli/187_2.jpg'},
    {'name': './stimuli/new_foil_stims/mulberry_14s.jpg', 'path': './stimuli/new_foil_stims/mulberry_14s.jpg'},
    {'name': './stimuli/new_foil_stims/whoopee_cushion_02s.jpg', 'path': './stimuli/new_foil_stims/whoopee_cushion_02s.jpg'},
    {'name': './stimuli/233_2.jpg', 'path': './stimuli/233_2.jpg'},
    {'name': './stimuli/new_foil_stims/eye_patch_01b.jpg', 'path': './stimuli/new_foil_stims/eye_patch_01b.jpg'},
    {'name': './stimuli/new_foil_stims/cake_mix_12s.jpg', 'path': './stimuli/new_foil_stims/cake_mix_12s.jpg'},
    {'name': './stimuli/174_2.jpg', 'path': './stimuli/174_2.jpg'},
    {'name': './stimuli/new_foil_stims/test_tube_10s.jpg', 'path': './stimuli/new_foil_stims/test_tube_10s.jpg'},
    {'name': './stimuli/new_foil_stims/grasshopper_09s.jpg', 'path': './stimuli/new_foil_stims/grasshopper_09s.jpg'},
    {'name': './stimuli/new_foil_stims/thermostat_11s.jpg', 'path': './stimuli/new_foil_stims/thermostat_11s.jpg'},
    {'name': './stimuli/new_foil_stims/onion_04s.jpg', 'path': './stimuli/new_foil_stims/onion_04s.jpg'},
    {'name': './stimuli/new_foil_stims/blazer_07s.jpg', 'path': './stimuli/new_foil_stims/blazer_07s.jpg'},
    {'name': './stimuli/243_2.jpg', 'path': './stimuli/243_2.jpg'},
    {'name': './stimuli/288_1.jpg', 'path': './stimuli/288_1.jpg'},
    {'name': './stimuli/142_2.jpg', 'path': './stimuli/142_2.jpg'},
    {'name': './stimuli/new_foil_stims/bolo_tie_08s.jpg', 'path': './stimuli/new_foil_stims/bolo_tie_08s.jpg'},
    {'name': './stimuli/229_1.jpg', 'path': './stimuli/229_1.jpg'},
    {'name': './stimuli/new_foil_stims/turtle_13n.jpg', 'path': './stimuli/new_foil_stims/turtle_13n.jpg'},
    {'name': './stimuli/new_foil_stims/drawer_11s.jpg', 'path': './stimuli/new_foil_stims/drawer_11s.jpg'},
    {'name': './stimuli/49_3.jpg', 'path': './stimuli/49_3.jpg'},
    {'name': './stimuli/new_foil_stims/alligator_08s.jpg', 'path': './stimuli/new_foil_stims/alligator_08s.jpg'},
    {'name': './stimuli/6_3.jpg', 'path': './stimuli/6_3.jpg'},
    {'name': './stimuli/297_3.jpg', 'path': './stimuli/297_3.jpg'},
    {'name': './stimuli/new_foil_stims/counter_14s.jpg', 'path': './stimuli/new_foil_stims/counter_14s.jpg'},
    {'name': './stimuli/new_foil_stims/pothole_07s.jpg', 'path': './stimuli/new_foil_stims/pothole_07s.jpg'},
    {'name': './stimuli/191_3.jpg', 'path': './stimuli/191_3.jpg'},
    {'name': './stimuli/new_foil_stims/kebab_01b.jpg', 'path': './stimuli/new_foil_stims/kebab_01b.jpg'},
    {'name': './stimuli/new_foil_stims/bonnet_05s.jpg', 'path': './stimuli/new_foil_stims/bonnet_05s.jpg'},
    {'name': './stimuli/new_foil_stims/mustache_11s.jpg', 'path': './stimuli/new_foil_stims/mustache_11s.jpg'},
    {'name': './stimuli/242_1.jpg', 'path': './stimuli/242_1.jpg'},
    {'name': './stimuli/new_foil_stims/woman_05s.jpg', 'path': './stimuli/new_foil_stims/woman_05s.jpg'},
    {'name': './stimuli/247_2.jpg', 'path': './stimuli/247_2.jpg'},
    {'name': './stimuli/new_foil_stims/gate_12s.jpg', 'path': './stimuli/new_foil_stims/gate_12s.jpg'},
    {'name': './stimuli/new_foil_stims/reindeer_14s.jpg', 'path': './stimuli/new_foil_stims/reindeer_14s.jpg'},
    {'name': './stimuli/new_foil_stims/fly_07s.jpg', 'path': './stimuli/new_foil_stims/fly_07s.jpg'},
    {'name': './stimuli/235_2.jpg', 'path': './stimuli/235_2.jpg'},
    {'name': './stimuli/new_foil_stims/powder_09s.jpg', 'path': './stimuli/new_foil_stims/powder_09s.jpg'},
    {'name': './stimuli/new_foil_stims/flypaper_10s.jpg', 'path': './stimuli/new_foil_stims/flypaper_10s.jpg'},
    {'name': './stimuli/new_foil_stims/cilantro_09s.jpg', 'path': './stimuli/new_foil_stims/cilantro_09s.jpg'},
    {'name': './stimuli/134_3.jpg', 'path': './stimuli/134_3.jpg'},
    {'name': './stimuli/new_foil_stims/lion_07s.jpg', 'path': './stimuli/new_foil_stims/lion_07s.jpg'},
    {'name': './stimuli/new_foil_stims/coffeemaker_12s.jpg', 'path': './stimuli/new_foil_stims/coffeemaker_12s.jpg'},
    {'name': './stimuli/217_1.jpg', 'path': './stimuli/217_1.jpg'},
    {'name': './stimuli/new_foil_stims/moss_09s.jpg', 'path': './stimuli/new_foil_stims/moss_09s.jpg'},
    {'name': './stimuli/140_1.jpg', 'path': './stimuli/140_1.jpg'},
    {'name': './stimuli/new_foil_stims/knitting_09s.jpg', 'path': './stimuli/new_foil_stims/knitting_09s.jpg'},
    {'name': './stimuli/226_1.jpg', 'path': './stimuli/226_1.jpg'},
    {'name': './stimuli/new_foil_stims/wire_cutters_01b.jpg', 'path': './stimuli/new_foil_stims/wire_cutters_01b.jpg'},
    {'name': './stimuli/197_2.jpg', 'path': './stimuli/197_2.jpg'},
    {'name': './stimuli/new_foil_stims/subway_04s.jpg', 'path': './stimuli/new_foil_stims/subway_04s.jpg'},
    {'name': './stimuli/169_2.jpg', 'path': './stimuli/169_2.jpg'},
    {'name': './stimuli/244_3.jpg', 'path': './stimuli/244_3.jpg'},
    {'name': './stimuli/149_3.jpg', 'path': './stimuli/149_3.jpg'},
    {'name': './stimuli/new_foil_stims/roller_coaster_16s.jpg', 'path': './stimuli/new_foil_stims/roller_coaster_16s.jpg'},
    {'name': './stimuli/new_foil_stims/clipper1_06s.jpg', 'path': './stimuli/new_foil_stims/clipper1_06s.jpg'},
    {'name': './stimuli/62_3.jpg', 'path': './stimuli/62_3.jpg'},
    {'name': './stimuli/new_foil_stims/cardinal_13s.jpg', 'path': './stimuli/new_foil_stims/cardinal_13s.jpg'},
    {'name': './stimuli/new_foil_stims/sea_urchin_20s.jpg', 'path': './stimuli/new_foil_stims/sea_urchin_20s.jpg'},
    {'name': './stimuli/154_3.jpg', 'path': './stimuli/154_3.jpg'},
    {'name': './stimuli/70_3.jpg', 'path': './stimuli/70_3.jpg'},
    {'name': './stimuli/new_foil_stims/beachball_09s.jpg', 'path': './stimuli/new_foil_stims/beachball_09s.jpg'},
    {'name': './stimuli/152_3.jpg', 'path': './stimuli/152_3.jpg'},
    {'name': './stimuli/74_1.jpg', 'path': './stimuli/74_1.jpg'},
    {'name': './stimuli/196_3.jpg', 'path': './stimuli/196_3.jpg'},
    {'name': './stimuli/new_foil_stims/workbench_14s.jpg', 'path': './stimuli/new_foil_stims/workbench_14s.jpg'},
    {'name': './stimuli/280_2.jpg', 'path': './stimuli/280_2.jpg'},
    {'name': './stimuli/10_1.jpg', 'path': './stimuli/10_1.jpg'},
    {'name': './stimuli/163_1.jpg', 'path': './stimuli/163_1.jpg'},
    {'name': './stimuli/286_1.jpg', 'path': './stimuli/286_1.jpg'},
    {'name': './stimuli/new_foil_stims/towel_10s.jpg', 'path': './stimuli/new_foil_stims/towel_10s.jpg'},
    {'name': './stimuli/new_foil_stims/wolf_05n.jpg', 'path': './stimuli/new_foil_stims/wolf_05n.jpg'},
    {'name': './stimuli/161_1.jpg', 'path': './stimuli/161_1.jpg'},
    {'name': './stimuli/76_3.jpg', 'path': './stimuli/76_3.jpg'},
    {'name': './stimuli/82_2.jpg', 'path': './stimuli/82_2.jpg'},
    {'name': './stimuli/new_foil_stims/pacifier_10s.jpg', 'path': './stimuli/new_foil_stims/pacifier_10s.jpg'},
    {'name': './stimuli/new_foil_stims/compost_10s.jpg', 'path': './stimuli/new_foil_stims/compost_10s.jpg'},
    {'name': './stimuli/new_foil_stims/trolley_03s.jpg', 'path': './stimuli/new_foil_stims/trolley_03s.jpg'},
    {'name': './stimuli/192_1.jpg', 'path': './stimuli/192_1.jpg'},
    {'name': './stimuli/263_1.jpg', 'path': './stimuli/263_1.jpg'},
    {'name': './stimuli/207_1.jpg', 'path': './stimuli/207_1.jpg'},
    {'name': './stimuli/154_2.jpg', 'path': './stimuli/154_2.jpg'},
    {'name': './stimuli/262_1.jpg', 'path': './stimuli/262_1.jpg'},
    {'name': './stimuli/new_foil_stims/lamb_chop_16s.jpg', 'path': './stimuli/new_foil_stims/lamb_chop_16s.jpg'},
    {'name': './stimuli/51_2.jpg', 'path': './stimuli/51_2.jpg'},
    {'name': './stimuli/new_foil_stims/dirt_bike_03s.jpg', 'path': './stimuli/new_foil_stims/dirt_bike_03s.jpg'},
    {'name': './stimuli/new_foil_stims/headset_03s.jpg', 'path': './stimuli/new_foil_stims/headset_03s.jpg'},
    {'name': './stimuli/251_1.jpg', 'path': './stimuli/251_1.jpg'},
    {'name': './stimuli/226_3.jpg', 'path': './stimuli/226_3.jpg'},
    {'name': './stimuli/244_1.jpg', 'path': './stimuli/244_1.jpg'},
    {'name': './stimuli/new_foil_stims/plant_02s.jpg', 'path': './stimuli/new_foil_stims/plant_02s.jpg'},
    {'name': './stimuli/214_3.jpg', 'path': './stimuli/214_3.jpg'},
    {'name': './stimuli/new_foil_stims/mallet_03s.jpg', 'path': './stimuli/new_foil_stims/mallet_03s.jpg'},
    {'name': './stimuli/new_foil_stims/fungus_07s.jpg', 'path': './stimuli/new_foil_stims/fungus_07s.jpg'},
    {'name': './stimuli/new_foil_stims/shawl_01b.jpg', 'path': './stimuli/new_foil_stims/shawl_01b.jpg'},
    {'name': './stimuli/174_1.jpg', 'path': './stimuli/174_1.jpg'},
    {'name': './stimuli/new_foil_stims/parfait_09s.jpg', 'path': './stimuli/new_foil_stims/parfait_09s.jpg'},
    {'name': './stimuli/275_1.jpg', 'path': './stimuli/275_1.jpg'},
    {'name': './stimuli/new_foil_stims/fire_pit_13s.jpg', 'path': './stimuli/new_foil_stims/fire_pit_13s.jpg'},
    {'name': './stimuli/266_3.jpg', 'path': './stimuli/266_3.jpg'},
    {'name': './stimuli/new_foil_stims/exhaust_pipe_05s.jpg', 'path': './stimuli/new_foil_stims/exhaust_pipe_05s.jpg'},
    {'name': './stimuli/174_3.jpg', 'path': './stimuli/174_3.jpg'},
    {'name': './stimuli/66_1.jpg', 'path': './stimuli/66_1.jpg'},
    {'name': './stimuli/55_1.jpg', 'path': './stimuli/55_1.jpg'},
    {'name': './stimuli/new_foil_stims/slug_11s.jpg', 'path': './stimuli/new_foil_stims/slug_11s.jpg'},
    {'name': './stimuli/new_foil_stims/screw_14s.jpg', 'path': './stimuli/new_foil_stims/screw_14s.jpg'},
    {'name': './stimuli/126_1.jpg', 'path': './stimuli/126_1.jpg'},
    {'name': './stimuli/new_foil_stims/orange_rind_15s.jpg', 'path': './stimuli/new_foil_stims/orange_rind_15s.jpg'},
    {'name': './stimuli/new_foil_stims/bubble_08s.jpg', 'path': './stimuli/new_foil_stims/bubble_08s.jpg'},
    {'name': './stimuli/207_2.jpg', 'path': './stimuli/207_2.jpg'},
    {'name': './stimuli/87_2.jpg', 'path': './stimuli/87_2.jpg'},
    {'name': './stimuli/new_foil_stims/carrot_05s.jpg', 'path': './stimuli/new_foil_stims/carrot_05s.jpg'},
    {'name': './stimuli/new_foil_stims/noisemaker_05s.jpg', 'path': './stimuli/new_foil_stims/noisemaker_05s.jpg'},
    {'name': './stimuli/122_3.jpg', 'path': './stimuli/122_3.jpg'},
    {'name': './stimuli/new_foil_stims/pretzel_04s.jpg', 'path': './stimuli/new_foil_stims/pretzel_04s.jpg'},
    {'name': './stimuli/21_1.jpg', 'path': './stimuli/21_1.jpg'},
    {'name': './stimuli/290_2.jpg', 'path': './stimuli/290_2.jpg'},
    {'name': './stimuli/new_foil_stims/popsicle_11s.jpg', 'path': './stimuli/new_foil_stims/popsicle_11s.jpg'},
    {'name': './stimuli/46_1.jpg', 'path': './stimuli/46_1.jpg'},
    {'name': './stimuli/279_1.jpg', 'path': './stimuli/279_1.jpg'},
    {'name': './stimuli/144_3.jpg', 'path': './stimuli/144_3.jpg'},
    {'name': './stimuli/new_foil_stims/hawk_14s.jpg', 'path': './stimuli/new_foil_stims/hawk_14s.jpg'},
    {'name': './stimuli/new_foil_stims/barbed_wire_04s.jpg', 'path': './stimuli/new_foil_stims/barbed_wire_04s.jpg'},
    {'name': './stimuli/new_foil_stims/vase_19n.jpg', 'path': './stimuli/new_foil_stims/vase_19n.jpg'},
    {'name': './stimuli/1_1.jpg', 'path': './stimuli/1_1.jpg'},
    {'name': './stimuli/278_2.jpg', 'path': './stimuli/278_2.jpg'},
    {'name': './stimuli/new_foil_stims/helicopter_18s.jpg', 'path': './stimuli/new_foil_stims/helicopter_18s.jpg'},
    {'name': './stimuli/104_3.jpg', 'path': './stimuli/104_3.jpg'},
    {'name': './stimuli/108_2.jpg', 'path': './stimuli/108_2.jpg'},
    {'name': './stimuli/new_foil_stims/leaf_02s.jpg', 'path': './stimuli/new_foil_stims/leaf_02s.jpg'},
    {'name': './stimuli/167_3.jpg', 'path': './stimuli/167_3.jpg'},
    {'name': './stimuli/new_foil_stims/hook1_12s.jpg', 'path': './stimuli/new_foil_stims/hook1_12s.jpg'},
    {'name': './stimuli/new_foil_stims/snail_05s.jpg', 'path': './stimuli/new_foil_stims/snail_05s.jpg'},
    {'name': './stimuli/109_1.jpg', 'path': './stimuli/109_1.jpg'},
    {'name': './stimuli/new_foil_stims/mast_12s.jpg', 'path': './stimuli/new_foil_stims/mast_12s.jpg'},
    {'name': './stimuli/45_3.jpg', 'path': './stimuli/45_3.jpg'},
    {'name': './stimuli/0_2.jpg', 'path': './stimuli/0_2.jpg'},
    {'name': './stimuli/new_foil_stims/projector_07n.jpg', 'path': './stimuli/new_foil_stims/projector_07n.jpg'},
    {'name': './stimuli/48_2.jpg', 'path': './stimuli/48_2.jpg'},
    {'name': './stimuli/243_1.jpg', 'path': './stimuli/243_1.jpg'},
    {'name': './stimuli/new_foil_stims/elephant_03n.jpg', 'path': './stimuli/new_foil_stims/elephant_03n.jpg'},
    {'name': './stimuli/11_2.jpg', 'path': './stimuli/11_2.jpg'},
    {'name': './stimuli/new_foil_stims/speedboat_09s.jpg', 'path': './stimuli/new_foil_stims/speedboat_09s.jpg'},
    {'name': './stimuli/new_foil_stims/centrifuge_10s.jpg', 'path': './stimuli/new_foil_stims/centrifuge_10s.jpg'},
    {'name': './stimuli/new_foil_stims/sword_03s.jpg', 'path': './stimuli/new_foil_stims/sword_03s.jpg'},
    {'name': './stimuli/176_3.jpg', 'path': './stimuli/176_3.jpg'},
    {'name': './stimuli/new_foil_stims/doorbell_08s.jpg', 'path': './stimuli/new_foil_stims/doorbell_08s.jpg'},
    {'name': './stimuli/new_foil_stims/crane_07s.jpg', 'path': './stimuli/new_foil_stims/crane_07s.jpg'},
    {'name': './stimuli/new_foil_stims/fishnet_stockings_14s.jpg', 'path': './stimuli/new_foil_stims/fishnet_stockings_14s.jpg'},
    {'name': './stimuli/new_foil_stims/gyro_04s.jpg', 'path': './stimuli/new_foil_stims/gyro_04s.jpg'},
    {'name': './stimuli/133_3.jpg', 'path': './stimuli/133_3.jpg'},
    {'name': './stimuli/72_2.jpg', 'path': './stimuli/72_2.jpg'},
    {'name': './stimuli/new_foil_stims/rollerblade_01b.jpg', 'path': './stimuli/new_foil_stims/rollerblade_01b.jpg'},
    {'name': './stimuli/new_foil_stims/pasta_05s.jpg', 'path': './stimuli/new_foil_stims/pasta_05s.jpg'},
    {'name': './stimuli/68_3.jpg', 'path': './stimuli/68_3.jpg'},
    {'name': './stimuli/new_foil_stims/seagull_05s.jpg', 'path': './stimuli/new_foil_stims/seagull_05s.jpg'},
    {'name': './stimuli/110_3.jpg', 'path': './stimuli/110_3.jpg'},
    {'name': './stimuli/new_foil_stims/mannequin_02s.jpg', 'path': './stimuli/new_foil_stims/mannequin_02s.jpg'},
    {'name': './stimuli/183_2.jpg', 'path': './stimuli/183_2.jpg'},
    {'name': './stimuli/new_foil_stims/polisher_12s.jpg', 'path': './stimuli/new_foil_stims/polisher_12s.jpg'},
    {'name': './stimuli/new_foil_stims/keyboard_09s.jpg', 'path': './stimuli/new_foil_stims/keyboard_09s.jpg'},
    {'name': './stimuli/265_1.jpg', 'path': './stimuli/265_1.jpg'},
    {'name': './stimuli/new_foil_stims/typewriter_02s.jpg', 'path': './stimuli/new_foil_stims/typewriter_02s.jpg'},
    {'name': './stimuli/178_2.jpg', 'path': './stimuli/178_2.jpg'},
    {'name': './stimuli/79_2.jpg', 'path': './stimuli/79_2.jpg'},
    {'name': './stimuli/52_2.jpg', 'path': './stimuli/52_2.jpg'},
    {'name': './stimuli/new_foil_stims/toga_06s.jpg', 'path': './stimuli/new_foil_stims/toga_06s.jpg'},
    {'name': './stimuli/23_2.jpg', 'path': './stimuli/23_2.jpg'},
    {'name': './stimuli/172_1.jpg', 'path': './stimuli/172_1.jpg'},
    {'name': './stimuli/new_foil_stims/scuba_12s.jpg', 'path': './stimuli/new_foil_stims/scuba_12s.jpg'},
    {'name': './stimuli/new_foil_stims/potpie_11s.jpg', 'path': './stimuli/new_foil_stims/potpie_11s.jpg'},
    {'name': './stimuli/new_foil_stims/barcode_07s.jpg', 'path': './stimuli/new_foil_stims/barcode_07s.jpg'},
    {'name': './stimuli/new_foil_stims/motorcycle_05s.jpg', 'path': './stimuli/new_foil_stims/motorcycle_05s.jpg'},
    {'name': './stimuli/new_foil_stims/pug_08s.jpg', 'path': './stimuli/new_foil_stims/pug_08s.jpg'},
    {'name': './stimuli/new_foil_stims/can_opener_02s.jpg', 'path': './stimuli/new_foil_stims/can_opener_02s.jpg'},
    {'name': './stimuli/106_1.jpg', 'path': './stimuli/106_1.jpg'},
    {'name': './stimuli/85_3.jpg', 'path': './stimuli/85_3.jpg'},
    {'name': './stimuli/new_foil_stims/skirt_08s.jpg', 'path': './stimuli/new_foil_stims/skirt_08s.jpg'},
    {'name': './stimuli/new_foil_stims/platypus_02s.jpg', 'path': './stimuli/new_foil_stims/platypus_02s.jpg'},
    {'name': './stimuli/107_3.jpg', 'path': './stimuli/107_3.jpg'},
    {'name': './stimuli/238_1.jpg', 'path': './stimuli/238_1.jpg'},
    {'name': './stimuli/new_foil_stims/jigsaw_puzzle_06s.jpg', 'path': './stimuli/new_foil_stims/jigsaw_puzzle_06s.jpg'},
    {'name': './stimuli/23_1.jpg', 'path': './stimuli/23_1.jpg'},
    {'name': './stimuli/new_foil_stims/pheasant_14s.jpg', 'path': './stimuli/new_foil_stims/pheasant_14s.jpg'},
    {'name': './stimuli/new_foil_stims/oilcan_08s.jpg', 'path': './stimuli/new_foil_stims/oilcan_08s.jpg'},
    {'name': './stimuli/new_foil_stims/treadmill_13s.jpg', 'path': './stimuli/new_foil_stims/treadmill_13s.jpg'},
    {'name': './stimuli/new_foil_stims/lemonade_14s.jpg', 'path': './stimuli/new_foil_stims/lemonade_14s.jpg'},
    {'name': './stimuli/233_3.jpg', 'path': './stimuli/233_3.jpg'},
    {'name': './stimuli/278_3.jpg', 'path': './stimuli/278_3.jpg'},
    {'name': './stimuli/new_foil_stims/shelf_02s.jpg', 'path': './stimuli/new_foil_stims/shelf_02s.jpg'},
    {'name': './stimuli/new_foil_stims/badger_19s.jpg', 'path': './stimuli/new_foil_stims/badger_19s.jpg'},
    {'name': './stimuli/85_2.jpg', 'path': './stimuli/85_2.jpg'},
    {'name': './stimuli/113_2.jpg', 'path': './stimuli/113_2.jpg'},
    {'name': './stimuli/245_2.jpg', 'path': './stimuli/245_2.jpg'},
    {'name': './stimuli/209_1.jpg', 'path': './stimuli/209_1.jpg'},
    {'name': 'stimuli/cue_left.png', 'path': 'stimuli/cue_left.png'},
    {'name': 'stimuli/cue_right.png', 'path': 'stimuli/cue_right.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/noise_mask.png', 'path': 'stimuli/noise_mask.png'},
    {'name': 'resources/taskPhases_0.csv', 'path': 'resources/taskPhases_0.csv'},
    {'name': 'resources/taskPhases_1.csv', 'path': 'resources/taskPhases_1.csv'},
    {'name': 'resources/taskPhases_list.csv', 'path': 'resources/taskPhases_list.csv'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls(('https://chkhaidze.ucsd.edu/questionnaires/questionnaires_wm.html?sona_id=2554&subject_id=' + expInfo['participant']), '');


  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var setup_jsClock;
var thisExp;
var win;
var event;
var Instructions1Clock;
var text1;
var key_resp_2;
var text;
var Instructions2Clock;
var text_2;
var key_resp_3;
var text_3;
var Instructions3Clock;
var text_4;
var key_resp_4;
var text_5;
var Instructions4Clock;
var text_6;
var key_resp_5;
var text_7;
var Instructions5Clock;
var text_16;
var image;
var text_17;
var image_2;
var text_18;
var key_resp_10;
var Instructions6bClock;
var text_25;
var key_resp_16;
var text_26;
var Instructions6Clock;
var text_20;
var key_resp_13;
var text_21;
var memorandaClock;
var left_stim;
var right_stim;
var fixation_cross_5;
var isi1Clock;
var fixation_cross;
var probeClock;
var picker;
var distractor_mem_stim;
var memoranda_stim;
var distractor_im_0;
var distractor_im_1;
var distractor_im_2;
var distractor_im_3;
var mouse;
var mem_cue;
var text_24;
var correct_ansClock;
var correct_border;
var distractor_mem_stim_3;
var memoranda_stim_2;
var distractor_im;
var distractor_im_4;
var distractor_im_5;
var distractor_im_6;
var distractor_im_7;
var mem_cue_2;
var ITIClock;
var fixation_iti;
var repeat_codeClock;
var repeat_prac_text_2;
var key_resp_14;
var Instructions7Clock;
var text_22;
var key_resp_15;
var text_23;
var Instructions8Clock;
var text_8;
var key_resp_6;
var fill_rectangle2;
var right_cue2;
var left_cue_2;
var dividing_line_2;
var key_resp_7;
var text_9;
var Instructions9Clock;
var text_10;
var fill_rectangle_5;
var right_cue3;
var left_cue3;
var dividing_line_3;
var text_11;
var fill_rectangle_6;
var right_cue3_2;
var left_cue3_2;
var dividing_line_4;
var key_resp_8;
var text_12;
var Instructions10Clock;
var text_13;
var fill_rectangle_7;
var right_cue3_3;
var left_cue3_3;
var dividing_line_6;
var text_14;
var fill_rectangle_8;
var right_cue3_4;
var left_cue3_4;
var dividing_line_5;
var key_resp_9;
var text_15;
var flag_for_loop;
var intro_txtClock;
var text_19;
var key_resp_11;
var initial_waitClock;
var fixation_cross_4;
var reliability_cueClock;
var fill_rectangle;
var right_cue;
var left_cue;
var dividing_line;
var isi2Clock;
var fixation_cross2;
var pingClock;
var ping_im;
var fixation_cross2_2;
var ping_im_2;
var fixation_cross2_3;
var ping_im_3;
var noise_maskClock;
var noise_mask_im;
var isi3Clock;
var fixation_cross_3;
var block_breakClock;
var break_txt;
var key_resp;
var repeat_practice_codeClock;
var repeat_prac_text;
var key_resp_12;
var InstructionsClock;
var Instructions_to_image_memory_test;
var key_resp_17;
var image_recall_taskClock;
var image_input;
var image_recall_response;
var small_breakClock;
var text_27;
var break_2Clock;
var break_txt_final;
var key_resp_18;
var end_expClock;
var thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "setup_js"
  setup_jsClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  
  // inserted the crib sheet stuff
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  
  //hide mouse
  document.body.style.cursor='none'
  
  //exit if on mobile
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    quitPsychoJS('Mobile device detected. Goodbye!', false)
  }
  // Initialize components for Routine "Instructions1"
  Instructions1Clock = new util.Clock();
  text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text1',
    text: 'Welcome to the experiment! Please read the following instructions carefully. You will see a demo of the task first, so do not worry if you do not understand the task right away.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '[Press the "y" key to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  //task_file_name = $'resources/taskPhases_'+str(random_id)+'.csv';
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: "Please perform the experiment in full-screen mode until the experiment concludes. If you would like to discontinue participation, you may press the 'escape' key and the experiment will terminate. \n\nYou can avoid uninentionally ending the experiment by remaining in full-screen mode, even during breaks.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '[Press the "y" key to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions3"
  Instructions3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'When the task begins, please remain focused on the cross in the middle of the screen. Use your peripheral vision to attend to the items that appear on screen.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '[Press the "y" key to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions4"
  Instructions4Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'In this task, you will be remembering images.\n\nOn each trial, will see TWO images, one on the left and one on the right. They will flash on the screen quickly. Do your best to pay equal attention to both images. \n\nYou should try to keep the two images in mind even after they disappear. \n\nYou will be tested on either the left or the right image, but never on both.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: '[Press the "y" key to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions5"
  Instructions5Clock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'These cues tell you which image you are being tested on. For example, this cue indicates that you should select which image was originally on the left:\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'stimuli/cue_left.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0.15], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'This cue indicates that you should select the stimulus that was on the right:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : 'stimuli/cue_right.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.15)], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: '[Press "y" to continue". ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions6b"
  Instructions6bClock = new util.Clock();
  text_25 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_25',
    text: 'Get ready to try a few example trials.\n\nRemember, the arrows point to where the image you are being tested on was originally presented. Click on that image regardless of where on the screen it is during the test.\n\nIt takes a little practice to get used to the task rules. You may neeed to perform the following practice several times. This is perfectly normal. The practice will automatically restart until you respond correctly to enough of the trials.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_16 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_26 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_26',
    text: '[Press "y" to continue". ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions6"
  Instructions6Clock = new util.Clock();
  text_20 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_20',
    text: 'After you see the two images, you will see a screen with 6 images to select between. Click on the image that was presented on the side of the screen that the arrow is pointing to. For example, if the arrow points left, click the image that was presented on the left side. \n\nAfter you make your response, a green box will highlight the correct answer.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_21 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_21',
    text: '[Press the "y" key to continue]',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "memoranda"
  memorandaClock = new util.Clock();
  left_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.35), 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  right_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.35, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  fixation_cross_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross_5',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "isi1"
  isi1Clock = new util.Clock();
  fixation_cross = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "probe"
  probeClock = new util.Clock();
  picker = new visual.Rect ({
    win: psychoJS.window, name: 'picker', 
    width: [0.26, 0.26][0], height: [0.26, 0.26][1],
    ori: 0.0, pos: [2, 2],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  distractor_mem_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_mem_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  memoranda_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memoranda_stim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  distractor_im_0 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_0', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  distractor_im_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  distractor_im_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  distractor_im_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  mem_cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mem_cue', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  text_24 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_24',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.09], height: 0.03,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "correct_ans"
  correct_ansClock = new util.Clock();
  correct_border = new visual.Rect ({
    win: psychoJS.window, name: 'correct_border', 
    width: [0.26, 0.26][0], height: [0.26, 0.26][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 10.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([(- 0.5294), 0.4039, (- 0.1137)]),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  distractor_mem_stim_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_mem_stim_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  memoranda_stim_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'memoranda_stim_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  distractor_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  distractor_im_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  distractor_im_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_5', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  distractor_im_6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_6', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  distractor_im_7 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'distractor_im_7', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  mem_cue_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'mem_cue_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  // Initialize components for Routine "ITI"
  ITIClock = new util.Clock();
  fixation_iti = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_iti',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "repeat_code"
  repeat_codeClock = new util.Clock();
  repeat_prac_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'repeat_prac_text_2',
    text: "You made too many incorrect responses during the practice.\n\nRemember, the arrows indicate the side where the image you are being tested on was originally presented. Click on that image regardless of where on the screen it is during the test.\n\nPlease try the practice again before moving on to the main experiment.\n\nPress 'y' to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions7"
  Instructions7Clock = new util.Clock();
  text_22 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_22',
    text: 'After you see the two images, a cue will appear that will tell you whether it is more likely that the stimulus on the left or the right will be tested.\n\nYou can use this information to help you perform the task well. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_15 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_23 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_23',
    text: "[Press 'y' to continue]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions8"
  Instructions8Clock = new util.Clock();
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Take a look at this example. Most of the left side of the rectangle is filled in, indicating a higher probability that the left image will be tested. \n\n\n\nA small portion of the right side of the rectangle is filled in. This means there is a small possibility that the right image will be tested. \n\nThis information can help you perform the task.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.065], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  fill_rectangle2 = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle2', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  right_cue2 = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue2', 
    width: [0.01375, 0.049][0], height: [0.01375, 0.049][1],
    ori: 0.0, pos: [0.006875, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  left_cue_2 = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue_2', 
    width: [0.15125, 0.049][0], height: [0.15125, 0.049][1],
    ori: 0.0, pos: [(- 0.075625), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  dividing_line_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line_2', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: "[Press 'y' to continue]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  // Initialize components for Routine "Instructions9"
  Instructions9Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'You will see four different symbols:\n\nThis one, which you just saw, indicates that the left image is MUCH more likely than the right image to be tested. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fill_rectangle_5 = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle_5', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  right_cue3 = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue3', 
    width: [0.01375, 0.049][0], height: [0.01375, 0.049][1],
    ori: 0.0, pos: [0.006875, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  left_cue3 = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue3', 
    width: [0.15125, 0.049][0], height: [0.15125, 0.049][1],
    ori: 0.0, pos: [(- 0.075625), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  dividing_line_3 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line_3', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'This symbol indicates that the left image is SOMEWHAT more likely than the right image to be tested. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  fill_rectangle_6 = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle_6', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  right_cue3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue3_2', 
    width: [0.06875, 0.049][0], height: [0.06875, 0.049][1],
    ori: 0.0, pos: [0.034375, (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  left_cue3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue3_2', 
    width: [0.09625, 0.049][0], height: [0.09625, 0.049][1],
    ori: 0.0, pos: [(- 0.048125), (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  dividing_line_4 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line_4', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: "[Press 'y' to continue]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "Instructions10"
  Instructions10Clock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'This symbol indicates that the right image is MUCH more likely than the left image to be tested. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  fill_rectangle_7 = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle_7', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  right_cue3_3 = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue3_3', 
    width: [0.15125, 0.049][0], height: [0.15125, 0.049][1],
    ori: 0.0, pos: [0.075625, 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  left_cue3_3 = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue3_3', 
    width: [0.01375, 0.049][0], height: [0.01375, 0.049][1],
    ori: 0.0, pos: [(- 0.006875), 0.1],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  dividing_line_6 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line_6', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0.1],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'This symbol indicates that the right image is SOMEWHAT more likely than the left image to be tested. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  fill_rectangle_8 = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle_8', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  right_cue3_4 = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue3_4', 
    width: [0.09625, 0.049][0], height: [0.09625, 0.049][1],
    ori: 0.0, pos: [0.048125, (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  left_cue3_4 = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue3_4', 
    width: [0.06875, 0.049][0], height: [0.06875, 0.049][1],
    ori: 0.0, pos: [(- 0.034375), (- 0.25)],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  dividing_line_5 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line_5', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, (- 0.25)],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -9, interpolate: true,
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: "[Press 'y' to continue]",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Run 'Begin Experiment' code from code_16
  //taskphases = (("taskphases_" + psydata.toString()) + ".csv");
  //psydata += 1;
  //save_path = "subject_number.txt";
  //psydata.saveAsWideText(save_path);
  //
  
  //const randomNumber = getRandomInt(2);
  //
  flag_for_loop = 0;
  // Initialize components for Routine "intro_txt"
  intro_txtClock = new util.Clock();
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "initial_wait"
  initial_waitClock = new util.Clock();
  fixation_cross_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross_4',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "reliability_cue"
  reliability_cueClock = new util.Clock();
  fill_rectangle = new visual.Rect ({
    win: psychoJS.window, name: 'fill_rectangle', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color([0.0, 0.0, 0.0]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  right_cue = new visual.Rect ({
    win: psychoJS.window, name: 'right_cue', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  left_cue = new visual.Rect ({
    win: psychoJS.window, name: 'left_cue', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  dividing_line = new visual.ShapeStim ({
    win: psychoJS.window, name: 'dividing_line', 
    vertices: [[-[0.1, 0.1][0]/2.0, 0], [+[0.1, 0.1][0]/2.0, 0]],
    ori: 90.0, pos: [0, 0],
    anchor: 'center',
    lineWidth: 2.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0.3255, 0.3255, 0.3255]),
    fillColor: new util.Color([0.3255, 0.3255, 0.3255]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  // Initialize components for Routine "isi2"
  isi2Clock = new util.Clock();
  fixation_cross2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ping"
  pingClock = new util.Clock();
  ping_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ping_im', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  fixation_cross2_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross2_2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  ping_im_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ping_im_2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  fixation_cross2_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross2_3',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  ping_im_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ping_im_3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "noise_mask"
  noise_maskClock = new util.Clock();
  noise_mask_im = new visual.ImageStim({
    win : psychoJS.window,
    name : 'noise_mask_im', units : undefined, 
    image : 'stimuli/noise_mask.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.35, 0.35],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "isi3"
  isi3Clock = new util.Clock();
  fixation_cross_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_cross_3',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "block_break"
  block_breakClock = new util.Clock();
  break_txt = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_txt',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "repeat_practice_code"
  repeat_practice_codeClock = new util.Clock();
  repeat_prac_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'repeat_prac_text',
    text: "You made too many incorrect responses during the practice.\n\nPlease try the practice again before moving on to the main experiment.\n\nPress 'y' to continue.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_12 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Instructions_to_image_memory_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instructions_to_image_memory_test',
    text: "This is the final part of the experiment. You will now see 240 images, each will be presented for 3 seconds and you need to click 1,2,3,4 to answer a question if you have seen the image overall in the experiment or not. 1 - Definitely have not seen, 2 - Probably have not seen, 3 - Probably have seen, 4 - Definitely have seen.\n\nOnce ready please click 'y'.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_17 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "image_recall_task"
  image_recall_taskClock = new util.Clock();
  image_input = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_input', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_recall_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  var minimumDisplayTime = 3.0;
  var startTime;
  // Initialize components for Routine "small_break"
  small_breakClock = new util.Clock();
  text_27 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_27',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "break_2"
  break_2Clock = new util.Clock();
  break_txt_final = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_txt_final',
    text: 'Any text\n\nincluding line breaks',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_18 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_exp"
  end_expClock = new util.Clock();
  thanks = new visual.TextStim({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Thank you for your participation!\n\nThis page will redirect back to complete a short survey.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var setup_jsComponents;
function setup_jsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'setup_js' ---
    t = 0;
    setup_jsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('setup_js.started', globalClock.getTime());
    // keep track of which components have finished
    setup_jsComponents = [];
    
    setup_jsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function setup_jsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'setup_js' ---
    // get current time
    t = setup_jsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    setup_jsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setup_jsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'setup_js' ---
    setup_jsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('setup_js.stopped', globalClock.getTime());
    // the Routine "setup_js" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_2_allKeys;
var Instructions1Components;
function Instructions1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions1' ---
    t = 0;
    Instructions1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions1.started', globalClock.getTime());
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS._serverManager.prepareResources([
    { name: ('./resources/taskPhases_0.csv'), path: ('./resources/taskPhases_0.csv') },
    { name: ('./resources/taskPhases_1.csv'), path: ('./resources/taskPhases_1.csv') },
    { name: ('./resources/taskPhases_2.csv'), path: ('./resources/taskPhases_2.csv') },
    { name: ('./resources/taskPhases_3.csv'), path: ('./resources/taskPhases_3.csv') },
    { name: ('./resources/taskPhases_4.csv'), path: ('./resources/taskPhases_4.csv') },
    { name: ('./resources/taskPhases_5.csv'), path: ('./resources/taskPhases_5.csv') },
    { name: ('./resources/taskPhases_6.csv'), path: ('./resources/taskPhases_6.csv') },
    { name: ('./resources/taskPhases_7.csv'), path: ('./resources/taskPhases_7.csv') },
    { name: ('./resources/taskPhases_8.csv'), path: ('./resources/taskPhases_8.csv') },
    { name: ('./resources/taskPhases_9.csv'), path: ('./resources/taskPhases_9.csv') },
    { name: ('./resources/taskPhases_10.csv'), path: ('./resources/taskPhases_10.csv') },
    { name: ('./resources/conditions_file_0.csv'), path: ('./resources/conditions_file_0.csv') },
    { name: ('./resources/conditions_file_1.csv'), path: ('./resources/conditions_file_1.csv') },
    { name: ('./resources/conditions_file_2.csv'), path: ('./resources/conditions_file_2.csv') },
    { name: ('./resources/conditions_file_3.csv'), path: ('./resources/conditions_file_3.csv') },
    { name: ('./resources/conditions_file_4.csv'), path: ('./resources/conditions_file_4.csv') },
    { name: ('./resources/conditions_file_5.csv'), path: ('./resources/conditions_file_5.csv') },
    { name: ('./resources/conditions_file_6.csv'), path: ('./resources/conditions_file_6.csv') },
    { name: ('./resources/conditions_file_7.csv'), path: ('./resources/conditions_file_7.csv') },
    { name: ('./resources/conditions_file_8.csv'), path: ('./resources/conditions_file_8.csv') },
    { name: ('./resources/conditions_file_9.csv'), path: ('./resources/conditions_file_9.csv') },
    { name: ('./resources/conditions_file_10.csv'), path: ('./resources/conditions_file_10.csv') },
    { name: ('./resources/taskPhases_list.csv'), path: ('./resources/taskPhases_list.csv') }
    ]);
    
    //
    //condNum = util.randint(0, 1);
    //taskFiles = (("resources/taskPhases_" + condNum.toString()) + ".csv");
    // keep track of which components have finished
    Instructions1Components = [];
    Instructions1Components.push(text1);
    Instructions1Components.push(key_resp_2);
    Instructions1Components.push(text);
    
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions1' ---
    // get current time
    t = Instructions1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text1* updates
    if (t >= 0.0 && text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text1.tStart = t;  // (not accounting for frame time here)
      text1.frameNStart = frameN;  // exact frame index
      
      text1.setAutoDraw(true);
    }
    
    
    // *key_resp_2* updates
    if (t >= 1 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text* updates
    if (t >= 1 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions1' ---
    Instructions1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(Instructions2RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions2RoutineEachFrame());
      trialsLoopScheduler.add(Instructions2RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions3RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions3RoutineEachFrame());
      trialsLoopScheduler.add(Instructions3RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions4RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions4RoutineEachFrame());
      trialsLoopScheduler.add(Instructions4RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions5RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions5RoutineEachFrame());
      trialsLoopScheduler.add(Instructions5RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions6bRoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions6bRoutineEachFrame());
      trialsLoopScheduler.add(Instructions6bRoutineEnd(snapshot));
      const repeat_pracLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(repeat_pracLoopBegin(repeat_pracLoopScheduler, snapshot));
      trialsLoopScheduler.add(repeat_pracLoopScheduler);
      trialsLoopScheduler.add(repeat_pracLoopEnd);
      trialsLoopScheduler.add(Instructions7RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions7RoutineEachFrame());
      trialsLoopScheduler.add(Instructions7RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions8RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions8RoutineEachFrame());
      trialsLoopScheduler.add(Instructions8RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions9RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions9RoutineEachFrame());
      trialsLoopScheduler.add(Instructions9RoutineEnd(snapshot));
      trialsLoopScheduler.add(Instructions10RoutineBegin(snapshot));
      trialsLoopScheduler.add(Instructions10RoutineEachFrame());
      trialsLoopScheduler.add(Instructions10RoutineEnd(snapshot));
      const trials_3LoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(trials_3LoopBegin(trials_3LoopScheduler, snapshot));
      trialsLoopScheduler.add(trials_3LoopScheduler);
      trialsLoopScheduler.add(trials_3LoopEnd);
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var repeat_prac;
function repeat_pracLoopBegin(repeat_pracLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_prac = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat_prac'
    });
    psychoJS.experiment.addLoop(repeat_prac); // add the loop to the experiment
    currentLoop = repeat_prac;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repeat_prac.forEach(function() {
      snapshot = repeat_prac.getSnapshot();
    
      repeat_pracLoopScheduler.add(importConditions(snapshot));
      repeat_pracLoopScheduler.add(Instructions6RoutineBegin(snapshot));
      repeat_pracLoopScheduler.add(Instructions6RoutineEachFrame());
      repeat_pracLoopScheduler.add(Instructions6RoutineEnd(snapshot));
      const prac_trialsLoopScheduler = new Scheduler(psychoJS);
      repeat_pracLoopScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot));
      repeat_pracLoopScheduler.add(prac_trialsLoopScheduler);
      repeat_pracLoopScheduler.add(prac_trialsLoopEnd);
      repeat_pracLoopScheduler.add(repeat_codeRoutineBegin(snapshot));
      repeat_pracLoopScheduler.add(repeat_codeRoutineEachFrame());
      repeat_pracLoopScheduler.add(repeat_codeRoutineEnd(snapshot));
      repeat_pracLoopScheduler.add(repeat_pracLoopEndIteration(repeat_pracLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'initial_practice.csv',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    prac_trials.forEach(function() {
      snapshot = prac_trials.getSnapshot();
    
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(memorandaRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(memorandaRoutineEachFrame());
      prac_trialsLoopScheduler.add(memorandaRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(isi1RoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(isi1RoutineEachFrame());
      prac_trialsLoopScheduler.add(isi1RoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(probeRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(probeRoutineEachFrame());
      prac_trialsLoopScheduler.add(probeRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(correct_ansRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(correct_ansRoutineEachFrame());
      prac_trialsLoopScheduler.add(correct_ansRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(ITIRoutineEachFrame());
      prac_trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_pracLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_prac);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_pracLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/taskPhases_list.csv',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      const demo_prac_taskLoopScheduler = new Scheduler(psychoJS);
      trials_3LoopScheduler.add(demo_prac_taskLoopBegin(demo_prac_taskLoopScheduler, snapshot));
      trials_3LoopScheduler.add(demo_prac_taskLoopScheduler);
      trials_3LoopScheduler.add(demo_prac_taskLoopEnd);
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var demo_prac_task;
function demo_prac_taskLoopBegin(demo_prac_taskLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    demo_prac_task = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: taskPhases,
      seed: undefined, name: 'demo_prac_task'
    });
    psychoJS.experiment.addLoop(demo_prac_task); // add the loop to the experiment
    currentLoop = demo_prac_task;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    demo_prac_task.forEach(function() {
      snapshot = demo_prac_task.getSnapshot();
    
      demo_prac_taskLoopScheduler.add(importConditions(snapshot));
      const repeat_practiceLoopScheduler = new Scheduler(psychoJS);
      demo_prac_taskLoopScheduler.add(repeat_practiceLoopBegin(repeat_practiceLoopScheduler, snapshot));
      demo_prac_taskLoopScheduler.add(repeat_practiceLoopScheduler);
      demo_prac_taskLoopScheduler.add(repeat_practiceLoopEnd);
      demo_prac_taskLoopScheduler.add(demo_prac_taskLoopEndIteration(demo_prac_taskLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var repeat_practice;
function repeat_practiceLoopBegin(repeat_practiceLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    repeat_practice = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 5, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'repeat_practice'
    });
    psychoJS.experiment.addLoop(repeat_practice); // add the loop to the experiment
    currentLoop = repeat_practice;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    repeat_practice.forEach(function() {
      snapshot = repeat_practice.getSnapshot();
    
      repeat_practiceLoopScheduler.add(importConditions(snapshot));
      repeat_practiceLoopScheduler.add(intro_txtRoutineBegin(snapshot));
      repeat_practiceLoopScheduler.add(intro_txtRoutineEachFrame());
      repeat_practiceLoopScheduler.add(intro_txtRoutineEnd(snapshot));
      repeat_practiceLoopScheduler.add(initial_waitRoutineBegin(snapshot));
      repeat_practiceLoopScheduler.add(initial_waitRoutineEachFrame());
      repeat_practiceLoopScheduler.add(initial_waitRoutineEnd(snapshot));
      const loop_trialsLoopScheduler = new Scheduler(psychoJS);
      repeat_practiceLoopScheduler.add(loop_trialsLoopBegin(loop_trialsLoopScheduler, snapshot));
      repeat_practiceLoopScheduler.add(loop_trialsLoopScheduler);
      repeat_practiceLoopScheduler.add(loop_trialsLoopEnd);
      repeat_practiceLoopScheduler.add(repeat_practice_codeRoutineBegin(snapshot));
      repeat_practiceLoopScheduler.add(repeat_practice_codeRoutineEachFrame());
      repeat_practiceLoopScheduler.add(repeat_practice_codeRoutineEnd(snapshot));
      repeat_practiceLoopScheduler.add(repeat_practiceLoopEndIteration(repeat_practiceLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var loop_trials;
function loop_trialsLoopBegin(loop_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: condsFile,
      seed: undefined, name: 'loop_trials'
    });
    psychoJS.experiment.addLoop(loop_trials); // add the loop to the experiment
    currentLoop = loop_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    loop_trials.forEach(function() {
      snapshot = loop_trials.getSnapshot();
    
      loop_trialsLoopScheduler.add(importConditions(snapshot));
      loop_trialsLoopScheduler.add(memorandaRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(memorandaRoutineEachFrame());
      loop_trialsLoopScheduler.add(memorandaRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(isi1RoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(isi1RoutineEachFrame());
      loop_trialsLoopScheduler.add(isi1RoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(reliability_cueRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(reliability_cueRoutineEachFrame());
      loop_trialsLoopScheduler.add(reliability_cueRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(isi2RoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(isi2RoutineEachFrame());
      loop_trialsLoopScheduler.add(isi2RoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(pingRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(pingRoutineEachFrame());
      loop_trialsLoopScheduler.add(pingRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(noise_maskRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(noise_maskRoutineEachFrame());
      loop_trialsLoopScheduler.add(noise_maskRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(isi3RoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(isi3RoutineEachFrame());
      loop_trialsLoopScheduler.add(isi3RoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(probeRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(probeRoutineEachFrame());
      loop_trialsLoopScheduler.add(probeRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(block_breakRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(block_breakRoutineEachFrame());
      loop_trialsLoopScheduler.add(block_breakRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(ITIRoutineBegin(snapshot));
      loop_trialsLoopScheduler.add(ITIRoutineEachFrame());
      loop_trialsLoopScheduler.add(ITIRoutineEnd(snapshot));
      loop_trialsLoopScheduler.add(loop_trialsLoopEndIteration(loop_trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function loop_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loop_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function repeat_practiceLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(repeat_practice);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function repeat_practiceLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function demo_prac_taskLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(demo_prac_task);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function demo_prac_taskLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'selected_and_foils.csv',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(image_recall_taskRoutineBegin(snapshot));
      trials_2LoopScheduler.add(image_recall_taskRoutineEachFrame());
      trials_2LoopScheduler.add(image_recall_taskRoutineEnd(snapshot));
      trials_2LoopScheduler.add(small_breakRoutineBegin(snapshot));
      trials_2LoopScheduler.add(small_breakRoutineEachFrame());
      trials_2LoopScheduler.add(small_breakRoutineEnd(snapshot));
      trials_2LoopScheduler.add(break_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(break_2RoutineEachFrame());
      trials_2LoopScheduler.add(break_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var _key_resp_3_allKeys;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions2' ---
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions2.started', globalClock.getTime());
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(text_2);
    Instructions2Components.push(key_resp_3);
    Instructions2Components.push(text_3);
    
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions2' ---
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // *key_resp_3* updates
    if (t >= 1 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 1 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions2' ---
    Instructions2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_4_allKeys;
var Instructions3Components;
function Instructions3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions3' ---
    t = 0;
    Instructions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions3.started', globalClock.getTime());
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    Instructions3Components = [];
    Instructions3Components.push(text_4);
    Instructions3Components.push(key_resp_4);
    Instructions3Components.push(text_5);
    
    Instructions3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions3' ---
    // get current time
    t = Instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // *key_resp_4* updates
    if (t >= 1 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 1 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions3' ---
    Instructions3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "Instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_5_allKeys;
var Instructions4Components;
function Instructions4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions4' ---
    t = 0;
    Instructions4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions4.started', globalClock.getTime());
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    Instructions4Components = [];
    Instructions4Components.push(text_6);
    Instructions4Components.push(key_resp_5);
    Instructions4Components.push(text_7);
    
    Instructions4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions4' ---
    // get current time
    t = Instructions4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    
    // *key_resp_5* updates
    if (t >= 1 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_7* updates
    if (t >= 1 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions4' ---
    Instructions4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "Instructions4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_10_allKeys;
var Instructions5Components;
function Instructions5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions5' ---
    t = 0;
    Instructions5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions5.started', globalClock.getTime());
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    Instructions5Components = [];
    Instructions5Components.push(text_16);
    Instructions5Components.push(image);
    Instructions5Components.push(text_17);
    Instructions5Components.push(image_2);
    Instructions5Components.push(text_18);
    Instructions5Components.push(key_resp_10);
    
    Instructions5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions5' ---
    // get current time
    t = Instructions5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    
    // *image_2* updates
    if (t >= 0.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }
    
    
    // *text_18* updates
    if (t >= 1 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    
    // *key_resp_10* updates
    if (t >= 1 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }
    
    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        key_resp_10.duration = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions5' ---
    Instructions5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        psychoJS.experiment.addData('key_resp_10.duration', key_resp_10.duration);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "Instructions5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_16_allKeys;
var Instructions6bComponents;
function Instructions6bRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions6b' ---
    t = 0;
    Instructions6bClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions6b.started', globalClock.getTime());
    key_resp_16.keys = undefined;
    key_resp_16.rt = undefined;
    _key_resp_16_allKeys = [];
    // keep track of which components have finished
    Instructions6bComponents = [];
    Instructions6bComponents.push(text_25);
    Instructions6bComponents.push(key_resp_16);
    Instructions6bComponents.push(text_26);
    
    Instructions6bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions6bRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions6b' ---
    // get current time
    t = Instructions6bClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_25* updates
    if (t >= 0.0 && text_25.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_25.tStart = t;  // (not accounting for frame time here)
      text_25.frameNStart = frameN;  // exact frame index
      
      text_25.setAutoDraw(true);
    }
    
    
    // *key_resp_16* updates
    if (t >= 1 && key_resp_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_16.tStart = t;  // (not accounting for frame time here)
      key_resp_16.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_16.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_16.clearEvents(); });
    }
    
    if (key_resp_16.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_16.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_16_allKeys = _key_resp_16_allKeys.concat(theseKeys);
      if (_key_resp_16_allKeys.length > 0) {
        key_resp_16.keys = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].name;  // just the last key pressed
        key_resp_16.rt = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].rt;
        key_resp_16.duration = _key_resp_16_allKeys[_key_resp_16_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_26* updates
    if (t >= 1 && text_26.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_26.tStart = t;  // (not accounting for frame time here)
      text_26.frameNStart = frameN;  // exact frame index
      
      text_26.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions6bComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions6bRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions6b' ---
    Instructions6bComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions6b.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_16.corr, level);
    }
    psychoJS.experiment.addData('key_resp_16.keys', key_resp_16.keys);
    if (typeof key_resp_16.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_16.rt', key_resp_16.rt);
        psychoJS.experiment.addData('key_resp_16.duration', key_resp_16.duration);
        routineTimer.reset();
        }
    
    key_resp_16.stop();
    // the Routine "Instructions6b" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_13_allKeys;
var mean_performance;
var Instructions6Components;
function Instructions6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions6' ---
    t = 0;
    Instructions6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions6.started', globalClock.getTime());
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    mean_performance = [];
    // keep track of which components have finished
    Instructions6Components = [];
    Instructions6Components.push(text_20);
    Instructions6Components.push(key_resp_13);
    Instructions6Components.push(text_21);
    
    Instructions6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions6' ---
    // get current time
    t = Instructions6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_20* updates
    if (t >= 0.0 && text_20.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_20.tStart = t;  // (not accounting for frame time here)
      text_20.frameNStart = frameN;  // exact frame index
      
      text_20.setAutoDraw(true);
    }
    
    
    // *key_resp_13* updates
    if (t >= 1 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }
    
    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        key_resp_13.duration = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_21* updates
    if (t >= 1 && text_21.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_21.tStart = t;  // (not accounting for frame time here)
      text_21.frameNStart = frameN;  // exact frame index
      
      text_21.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions6Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions6' ---
    Instructions6Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        psychoJS.experiment.addData('key_resp_13.duration', key_resp_13.duration);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "Instructions6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var memorandaComponents;
function memorandaRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'memoranda' ---
    t = 0;
    memorandaClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('memoranda.started', globalClock.getTime());
    left_stim.setImage(left_img);
    right_stim.setImage(right_img);
    //console.log(loop_trials.thisN);
    
    console.log(loop_numbers);
    // keep track of which components have finished
    memorandaComponents = [];
    memorandaComponents.push(left_stim);
    memorandaComponents.push(right_stim);
    memorandaComponents.push(fixation_cross_5);
    
    memorandaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function memorandaRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'memoranda' ---
    // get current time
    t = memorandaClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *left_stim* updates
    if (t >= 0.0 && left_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_stim.tStart = t;  // (not accounting for frame time here)
      left_stim.frameNStart = frameN;  // exact frame index
      
      left_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cue_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_stim.setAutoDraw(false);
    }
    
    // *right_stim* updates
    if (t >= 0.0 && right_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_stim.tStart = t;  // (not accounting for frame time here)
      right_stim.frameNStart = frameN;  // exact frame index
      
      right_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cue_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_stim.setAutoDraw(false);
    }
    
    // *fixation_cross_5* updates
    if (t >= 0.0 && fixation_cross_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross_5.tStart = t;  // (not accounting for frame time here)
      fixation_cross_5.frameNStart = frameN;  // exact frame index
      
      fixation_cross_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + cue_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross_5.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    memorandaComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function memorandaRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'memoranda' ---
    memorandaComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('memoranda.stopped', globalClock.getTime());
    // the Routine "memoranda" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var isi1Components;
function isi1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'isi1' ---
    t = 0;
    isi1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('isi1.started', globalClock.getTime());
    // keep track of which components have finished
    isi1Components = [];
    isi1Components.push(fixation_cross);
    
    isi1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function isi1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'isi1' ---
    // get current time
    t = isi1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_cross* updates
    if (t >= 0.0 && fixation_cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross.tStart = t;  // (not accounting for frame time here)
      fixation_cross.frameNStart = frameN;  // exact frame index
      
      fixation_cross.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + delay_1_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    isi1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function isi1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'isi1' ---
    isi1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('isi1.stopped', globalClock.getTime());
    // the Routine "isi1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var gotValidClick;
var correct;
var guide_text;
var probeComponents;
function probeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'probe' ---
    t = 0;
    probeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('probe.started', globalClock.getTime());
    distractor_mem_stim.setPos([dismem_x, dismem_y]);
    distractor_mem_stim.setImage(distractor_stim);
    memoranda_stim.setPos([mem_x, mem_y]);
    memoranda_stim.setImage(mem_stim);
    distractor_im_0.setPos([dis0_x, dis0_y]);
    distractor_im_0.setImage(distractor_0);
    distractor_im_1.setPos([dis1_x, dis1_y]);
    distractor_im_1.setImage(distractor_1);
    distractor_im_2.setPos([dis2_x, dis2_y]);
    distractor_im_2.setImage(distractor_2);
    distractor_im_3.setPos([dis3_x, dis3_y]);
    distractor_im_3.setImage(distractor_3);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    mem_cue.setImage(cue_img);
    text_24.setText('instruct_guide_txt');
    // Run 'Begin Routine' code from code_2
    
    //show mouse
    document.body.style.cursor='auto'
    
    //picker outline
    picker.pos= [2,2];
    picker.setAutoDraw(true);
    
    correct = 0;
    
    if (probe_direction == 'right' && taskPhase == 'intro') { 
        guide_text = "Click on the stimulus that was presented on the right side";
    } 
    else if (probe_direction == 'left' && taskPhase == 'intro'){
      guide_text = "Click on the stimulus that was presented on the left side";
     }
    else {
       guide_text = " ";
     };
    text_24.text = guide_text
    
    
    // keep track of which components have finished
    probeComponents = [];
    probeComponents.push(picker);
    probeComponents.push(distractor_mem_stim);
    probeComponents.push(memoranda_stim);
    probeComponents.push(distractor_im_0);
    probeComponents.push(distractor_im_1);
    probeComponents.push(distractor_im_2);
    probeComponents.push(distractor_im_3);
    probeComponents.push(mouse);
    probeComponents.push(mem_cue);
    probeComponents.push(text_24);
    
    probeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
var options;
function probeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'probe' ---
    // get current time
    t = probeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *picker* updates
    if (t >= 0.0 && picker.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      picker.tStart = t;  // (not accounting for frame time here)
      picker.frameNStart = frameN;  // exact frame index
      
      picker.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (picker.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      picker.setAutoDraw(false);
    }
    
    // *distractor_mem_stim* updates
    if (t >= 0.0 && distractor_mem_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_mem_stim.tStart = t;  // (not accounting for frame time here)
      distractor_mem_stim.frameNStart = frameN;  // exact frame index
      
      distractor_mem_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_mem_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_mem_stim.setAutoDraw(false);
    }
    
    // *memoranda_stim* updates
    if (t >= 0.0 && memoranda_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memoranda_stim.tStart = t;  // (not accounting for frame time here)
      memoranda_stim.frameNStart = frameN;  // exact frame index
      
      memoranda_stim.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memoranda_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memoranda_stim.setAutoDraw(false);
    }
    
    // *distractor_im_0* updates
    if (t >= 0.0 && distractor_im_0.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_0.tStart = t;  // (not accounting for frame time here)
      distractor_im_0.frameNStart = frameN;  // exact frame index
      
      distractor_im_0.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_0.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_0.setAutoDraw(false);
    }
    
    // *distractor_im_1* updates
    if (t >= 0.0 && distractor_im_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_1.tStart = t;  // (not accounting for frame time here)
      distractor_im_1.frameNStart = frameN;  // exact frame index
      
      distractor_im_1.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_1.setAutoDraw(false);
    }
    
    // *distractor_im_2* updates
    if (t >= 0.0 && distractor_im_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_2.tStart = t;  // (not accounting for frame time here)
      distractor_im_2.frameNStart = frameN;  // exact frame index
      
      distractor_im_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_2.setAutoDraw(false);
    }
    
    // *distractor_im_3* updates
    if (t >= 0.0 && distractor_im_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_3.tStart = t;  // (not accounting for frame time here)
      distractor_im_3.frameNStart = frameN;  // exact frame index
      
      distractor_im_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_3.setAutoDraw(false);
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse.status = PsychoJS.Status.FINISHED;
        }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [memoranda_stim, distractor_mem_stim, distractor_im_0, distractor_im_1, distractor_im_2, distractor_im_3]) {
            if (obj.contains(mouse)) {
              gotValidClick = true;
              mouse.clicked_name.push(obj.name)
            }
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    
    // *mem_cue* updates
    if (t >= 0.0 && mem_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mem_cue.tStart = t;  // (not accounting for frame time here)
      mem_cue.frameNStart = frameN;  // exact frame index
      
      mem_cue.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mem_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mem_cue.setAutoDraw(false);
    }
    
    // *text_24* updates
    if (t >= 0.0 && text_24.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_24.tStart = t;  // (not accounting for frame time here)
      text_24.frameNStart = frameN;  // exact frame index
      
      text_24.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + probe_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_24.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_24.setAutoDraw(false);
    }
    
    options = [memoranda_stim, distractor_mem_stim, distractor_im_0, distractor_im_1, distractor_im_2, distractor_im_3];
    
    for (let i = 0; i < options.length; i++) { 
    
        if (mouse.isPressedIn(options[i], [0])) {
            
            picker.pos= options[i].pos;
            picker.setAutoDraw(true);
    
            //note this should update correct to be whatevr was chosen last
            if (mouse.isPressedIn(memoranda_stim, [0])) {
                correct = 1;
               } 
            else { 
                correct = 0;           
             };     
        
        };
        
     };
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    probeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'probe' ---
    probeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('probe.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    document.body.style.cursor='none';
    
    
    psychoJS.experiment.addData("resp_correct",correct);
    psychoJS.experiment.addData("taskPhase",taskPhase);
    mean_performance.push(correct);
    // the Routine "probe" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var correct_ansComponents;
function correct_ansRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'correct_ans' ---
    t = 0;
    correct_ansClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('correct_ans.started', globalClock.getTime());
    correct_border.setPos([mem_x, mem_y]);
    distractor_mem_stim_3.setPos([dismem_x, dismem_y]);
    distractor_mem_stim_3.setImage(distractor_stim);
    memoranda_stim_2.setPos([mem_x, mem_y]);
    memoranda_stim_2.setImage(mem_stim);
    distractor_im.setPos([dis0_x, dis0_y]);
    distractor_im.setImage(distractor_0);
    distractor_im_4.setPos([dis1_x, dis1_y]);
    distractor_im_4.setImage(distractor_1);
    distractor_im_5.setPos([dis2_x, dis2_y]);
    distractor_im_5.setImage(distractor_2);
    distractor_im_6.setPos([dis2_x, dis2_y]);
    distractor_im_6.setImage(distractor_2);
    distractor_im_7.setPos([dis3_x, dis3_y]);
    distractor_im_7.setImage(distractor_3);
    mem_cue_2.setImage(cue_img);
    // keep track of which components have finished
    correct_ansComponents = [];
    correct_ansComponents.push(correct_border);
    correct_ansComponents.push(distractor_mem_stim_3);
    correct_ansComponents.push(memoranda_stim_2);
    correct_ansComponents.push(distractor_im);
    correct_ansComponents.push(distractor_im_4);
    correct_ansComponents.push(distractor_im_5);
    correct_ansComponents.push(distractor_im_6);
    correct_ansComponents.push(distractor_im_7);
    correct_ansComponents.push(mem_cue_2);
    
    correct_ansComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function correct_ansRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'correct_ans' ---
    // get current time
    t = correct_ansClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *correct_border* updates
    if (t >= 0.0 && correct_border.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      correct_border.tStart = t;  // (not accounting for frame time here)
      correct_border.frameNStart = frameN;  // exact frame index
      
      correct_border.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (correct_border.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      correct_border.setAutoDraw(false);
    }
    
    // *distractor_mem_stim_3* updates
    if (t >= 0.0 && distractor_mem_stim_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_mem_stim_3.tStart = t;  // (not accounting for frame time here)
      distractor_mem_stim_3.frameNStart = frameN;  // exact frame index
      
      distractor_mem_stim_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_mem_stim_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_mem_stim_3.setAutoDraw(false);
    }
    
    // *memoranda_stim_2* updates
    if (t >= 0.0 && memoranda_stim_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      memoranda_stim_2.tStart = t;  // (not accounting for frame time here)
      memoranda_stim_2.frameNStart = frameN;  // exact frame index
      
      memoranda_stim_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (memoranda_stim_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      memoranda_stim_2.setAutoDraw(false);
    }
    
    // *distractor_im* updates
    if (t >= 0.0 && distractor_im.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im.tStart = t;  // (not accounting for frame time here)
      distractor_im.frameNStart = frameN;  // exact frame index
      
      distractor_im.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im.setAutoDraw(false);
    }
    
    // *distractor_im_4* updates
    if (t >= 0.0 && distractor_im_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_4.tStart = t;  // (not accounting for frame time here)
      distractor_im_4.frameNStart = frameN;  // exact frame index
      
      distractor_im_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_4.setAutoDraw(false);
    }
    
    // *distractor_im_5* updates
    if (t >= 0.0 && distractor_im_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_5.tStart = t;  // (not accounting for frame time here)
      distractor_im_5.frameNStart = frameN;  // exact frame index
      
      distractor_im_5.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_5.setAutoDraw(false);
    }
    
    // *distractor_im_6* updates
    if (t >= 0.0 && distractor_im_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_6.tStart = t;  // (not accounting for frame time here)
      distractor_im_6.frameNStart = frameN;  // exact frame index
      
      distractor_im_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_6.setAutoDraw(false);
    }
    
    // *distractor_im_7* updates
    if (t >= 0.0 && distractor_im_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      distractor_im_7.tStart = t;  // (not accounting for frame time here)
      distractor_im_7.frameNStart = frameN;  // exact frame index
      
      distractor_im_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (distractor_im_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      distractor_im_7.setAutoDraw(false);
    }
    
    // *mem_cue_2* updates
    if (t >= 0.0 && mem_cue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mem_cue_2.tStart = t;  // (not accounting for frame time here)
      mem_cue_2.frameNStart = frameN;  // exact frame index
      
      mem_cue_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mem_cue_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mem_cue_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    correct_ansComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function correct_ansRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'correct_ans' ---
    correct_ansComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('correct_ans.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var ITIComponents;
function ITIRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ITI' ---
    t = 0;
    ITIClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ITI.started', globalClock.getTime());
    // keep track of which components have finished
    ITIComponents = [];
    ITIComponents.push(fixation_iti);
    
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function ITIRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ITI' ---
    // get current time
    t = ITIClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_iti* updates
    if (t >= 0.0 && fixation_iti.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_iti.tStart = t;  // (not accounting for frame time here)
      fixation_iti.frameNStart = frameN;  // exact frame index
      
      fixation_iti.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + iti_dur - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_iti.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_iti.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    ITIComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ITIRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ITI' ---
    ITIComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ITI.stopped', globalClock.getTime());
    // the Routine "ITI" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_14_allKeys;
var mean_perf;
var repeat_codeComponents;
function repeat_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'repeat_code' ---
    t = 0;
    repeat_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('repeat_code.started', globalClock.getTime());
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // Run 'Begin Routine' code from code_6
    mean_perf = mean_performance.reduce((a, b) => a + b) / mean_performance.length
    
    console.log('\nepoch summaries\n')
    console.log(mean_performance)
    console.log(mean_perf)
    console.log(mean_performance.length)
    
    //check if practice and mean accuracy is below a threshold
    if (mean_perf < .8) {
        console.log('repeating practice');
        mean_performance = [];
        }
    else {
        continueRoutine = false; 
        repeat_prac.finished = true;
    };
    // keep track of which components have finished
    repeat_codeComponents = [];
    repeat_codeComponents.push(repeat_prac_text_2);
    repeat_codeComponents.push(key_resp_14);
    
    repeat_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function repeat_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'repeat_code' ---
    // get current time
    t = repeat_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *repeat_prac_text_2* updates
    if (t >= 0.0 && repeat_prac_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repeat_prac_text_2.tStart = t;  // (not accounting for frame time here)
      repeat_prac_text_2.frameNStart = frameN;  // exact frame index
      
      repeat_prac_text_2.setAutoDraw(true);
    }
    
    
    // *key_resp_14* updates
    if (t >= 1 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }
    
    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        key_resp_14.duration = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    repeat_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function repeat_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'repeat_code' ---
    repeat_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('repeat_code.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_14.corr, level);
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        psychoJS.experiment.addData('key_resp_14.duration', key_resp_14.duration);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "repeat_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_15_allKeys;
var Instructions7Components;
function Instructions7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions7' ---
    t = 0;
    Instructions7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions7.started', globalClock.getTime());
    key_resp_15.keys = undefined;
    key_resp_15.rt = undefined;
    _key_resp_15_allKeys = [];
    // keep track of which components have finished
    Instructions7Components = [];
    Instructions7Components.push(text_22);
    Instructions7Components.push(key_resp_15);
    Instructions7Components.push(text_23);
    
    Instructions7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions7' ---
    // get current time
    t = Instructions7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_22* updates
    if (t >= 0.0 && text_22.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_22.tStart = t;  // (not accounting for frame time here)
      text_22.frameNStart = frameN;  // exact frame index
      
      text_22.setAutoDraw(true);
    }
    
    
    // *key_resp_15* updates
    if (t >= 1 && key_resp_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_15.tStart = t;  // (not accounting for frame time here)
      key_resp_15.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_15.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_15.clearEvents(); });
    }
    
    if (key_resp_15.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_15.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_15_allKeys = _key_resp_15_allKeys.concat(theseKeys);
      if (_key_resp_15_allKeys.length > 0) {
        key_resp_15.keys = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].name;  // just the last key pressed
        key_resp_15.rt = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].rt;
        key_resp_15.duration = _key_resp_15_allKeys[_key_resp_15_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_23* updates
    if (t >= 1 && text_23.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_23.tStart = t;  // (not accounting for frame time here)
      text_23.frameNStart = frameN;  // exact frame index
      
      text_23.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions7Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions7' ---
    Instructions7Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_15.corr, level);
    }
    psychoJS.experiment.addData('key_resp_15.keys', key_resp_15.keys);
    if (typeof key_resp_15.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_15.rt', key_resp_15.rt);
        psychoJS.experiment.addData('key_resp_15.duration', key_resp_15.duration);
        routineTimer.reset();
        }
    
    key_resp_15.stop();
    // the Routine "Instructions7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_6_allKeys;
var _key_resp_7_allKeys;
var Instructions8Components;
function Instructions8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions8' ---
    t = 0;
    Instructions8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions8.started', globalClock.getTime());
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    fill_rectangle2.setSize([rec_length, 0.05]);
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    Instructions8Components = [];
    Instructions8Components.push(text_8);
    Instructions8Components.push(key_resp_6);
    Instructions8Components.push(fill_rectangle2);
    Instructions8Components.push(right_cue2);
    Instructions8Components.push(left_cue_2);
    Instructions8Components.push(dividing_line_2);
    Instructions8Components.push(key_resp_7);
    Instructions8Components.push(text_9);
    
    Instructions8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions8' ---
    // get current time
    t = Instructions8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *fill_rectangle2* updates
    if (t >= 0.0 && fill_rectangle2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle2.tStart = t;  // (not accounting for frame time here)
      fill_rectangle2.frameNStart = frameN;  // exact frame index
      
      fill_rectangle2.setAutoDraw(true);
    }
    
    
    // *right_cue2* updates
    if (t >= 0.0 && right_cue2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue2.tStart = t;  // (not accounting for frame time here)
      right_cue2.frameNStart = frameN;  // exact frame index
      
      right_cue2.setAutoDraw(true);
    }
    
    
    // *left_cue_2* updates
    if (t >= 0.0 && left_cue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue_2.tStart = t;  // (not accounting for frame time here)
      left_cue_2.frameNStart = frameN;  // exact frame index
      
      left_cue_2.setAutoDraw(true);
    }
    
    
    // *dividing_line_2* updates
    if (t >= 0.0 && dividing_line_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line_2.tStart = t;  // (not accounting for frame time here)
      dividing_line_2.frameNStart = frameN;  // exact frame index
      
      dividing_line_2.setAutoDraw(true);
    }
    
    
    // *key_resp_7* updates
    if (t >= 1 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }
    
    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        key_resp_7.duration = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_9* updates
    if (t >= 1 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions8Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions8' ---
    Instructions8Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        psychoJS.experiment.addData('key_resp_7.duration', key_resp_7.duration);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "Instructions8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_8_allKeys;
var Instructions9Components;
function Instructions9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions9' ---
    t = 0;
    Instructions9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions9.started', globalClock.getTime());
    fill_rectangle_5.setSize([rec_length, 0.05]);
    fill_rectangle_6.setSize([rec_length, 0.05]);
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Instructions9Components = [];
    Instructions9Components.push(text_10);
    Instructions9Components.push(fill_rectangle_5);
    Instructions9Components.push(right_cue3);
    Instructions9Components.push(left_cue3);
    Instructions9Components.push(dividing_line_3);
    Instructions9Components.push(text_11);
    Instructions9Components.push(fill_rectangle_6);
    Instructions9Components.push(right_cue3_2);
    Instructions9Components.push(left_cue3_2);
    Instructions9Components.push(dividing_line_4);
    Instructions9Components.push(key_resp_8);
    Instructions9Components.push(text_12);
    
    Instructions9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions9RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions9' ---
    // get current time
    t = Instructions9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    
    // *fill_rectangle_5* updates
    if (t >= 0.0 && fill_rectangle_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle_5.tStart = t;  // (not accounting for frame time here)
      fill_rectangle_5.frameNStart = frameN;  // exact frame index
      
      fill_rectangle_5.setAutoDraw(true);
    }
    
    
    // *right_cue3* updates
    if (t >= 0.0 && right_cue3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue3.tStart = t;  // (not accounting for frame time here)
      right_cue3.frameNStart = frameN;  // exact frame index
      
      right_cue3.setAutoDraw(true);
    }
    
    
    // *left_cue3* updates
    if (t >= 0.0 && left_cue3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue3.tStart = t;  // (not accounting for frame time here)
      left_cue3.frameNStart = frameN;  // exact frame index
      
      left_cue3.setAutoDraw(true);
    }
    
    
    // *dividing_line_3* updates
    if (t >= 0.0 && dividing_line_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line_3.tStart = t;  // (not accounting for frame time here)
      dividing_line_3.frameNStart = frameN;  // exact frame index
      
      dividing_line_3.setAutoDraw(true);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    
    // *fill_rectangle_6* updates
    if (t >= 0.0 && fill_rectangle_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle_6.tStart = t;  // (not accounting for frame time here)
      fill_rectangle_6.frameNStart = frameN;  // exact frame index
      
      fill_rectangle_6.setAutoDraw(true);
    }
    
    
    // *right_cue3_2* updates
    if (t >= 0.0 && right_cue3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue3_2.tStart = t;  // (not accounting for frame time here)
      right_cue3_2.frameNStart = frameN;  // exact frame index
      
      right_cue3_2.setAutoDraw(true);
    }
    
    
    // *left_cue3_2* updates
    if (t >= 0.0 && left_cue3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue3_2.tStart = t;  // (not accounting for frame time here)
      left_cue3_2.frameNStart = frameN;  // exact frame index
      
      left_cue3_2.setAutoDraw(true);
    }
    
    
    // *dividing_line_4* updates
    if (t >= 0.0 && dividing_line_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line_4.tStart = t;  // (not accounting for frame time here)
      dividing_line_4.frameNStart = frameN;  // exact frame index
      
      dividing_line_4.setAutoDraw(true);
    }
    
    
    // *key_resp_8* updates
    if (t >= 1 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }
    
    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        key_resp_8.duration = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_12* updates
    if (t >= 1 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions9Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions9RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions9' ---
    Instructions9Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions9.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        psychoJS.experiment.addData('key_resp_8.duration', key_resp_8.duration);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Instructions9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_9_allKeys;
var Instructions10Components;
function Instructions10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions10' ---
    t = 0;
    Instructions10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions10.started', globalClock.getTime());
    fill_rectangle_7.setSize([rec_length, 0.05]);
    fill_rectangle_8.setSize([rec_length, 0.05]);
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Instructions10Components = [];
    Instructions10Components.push(text_13);
    Instructions10Components.push(fill_rectangle_7);
    Instructions10Components.push(right_cue3_3);
    Instructions10Components.push(left_cue3_3);
    Instructions10Components.push(dividing_line_6);
    Instructions10Components.push(text_14);
    Instructions10Components.push(fill_rectangle_8);
    Instructions10Components.push(right_cue3_4);
    Instructions10Components.push(left_cue3_4);
    Instructions10Components.push(dividing_line_5);
    Instructions10Components.push(key_resp_9);
    Instructions10Components.push(text_15);
    
    Instructions10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Instructions10RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions10' ---
    // get current time
    t = Instructions10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    
    // *fill_rectangle_7* updates
    if (t >= 0.0 && fill_rectangle_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle_7.tStart = t;  // (not accounting for frame time here)
      fill_rectangle_7.frameNStart = frameN;  // exact frame index
      
      fill_rectangle_7.setAutoDraw(true);
    }
    
    
    // *right_cue3_3* updates
    if (t >= 0.0 && right_cue3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue3_3.tStart = t;  // (not accounting for frame time here)
      right_cue3_3.frameNStart = frameN;  // exact frame index
      
      right_cue3_3.setAutoDraw(true);
    }
    
    
    // *left_cue3_3* updates
    if (t >= 0.0 && left_cue3_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue3_3.tStart = t;  // (not accounting for frame time here)
      left_cue3_3.frameNStart = frameN;  // exact frame index
      
      left_cue3_3.setAutoDraw(true);
    }
    
    
    // *dividing_line_6* updates
    if (t >= 0.0 && dividing_line_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line_6.tStart = t;  // (not accounting for frame time here)
      dividing_line_6.frameNStart = frameN;  // exact frame index
      
      dividing_line_6.setAutoDraw(true);
    }
    
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    
    // *fill_rectangle_8* updates
    if (t >= 0.0 && fill_rectangle_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle_8.tStart = t;  // (not accounting for frame time here)
      fill_rectangle_8.frameNStart = frameN;  // exact frame index
      
      fill_rectangle_8.setAutoDraw(true);
    }
    
    
    // *right_cue3_4* updates
    if (t >= 0.0 && right_cue3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue3_4.tStart = t;  // (not accounting for frame time here)
      right_cue3_4.frameNStart = frameN;  // exact frame index
      
      right_cue3_4.setAutoDraw(true);
    }
    
    
    // *left_cue3_4* updates
    if (t >= 0.0 && left_cue3_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue3_4.tStart = t;  // (not accounting for frame time here)
      left_cue3_4.frameNStart = frameN;  // exact frame index
      
      left_cue3_4.setAutoDraw(true);
    }
    
    
    // *dividing_line_5* updates
    if (t >= 0.0 && dividing_line_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line_5.tStart = t;  // (not accounting for frame time here)
      dividing_line_5.frameNStart = frameN;  // exact frame index
      
      dividing_line_5.setAutoDraw(true);
    }
    
    
    // *key_resp_9* updates
    if (t >= 1 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }
    
    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        key_resp_9.duration = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_15* updates
    if (t >= 1 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Instructions10Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions10RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions10' ---
    Instructions10Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions10.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        psychoJS.experiment.addData('key_resp_9.duration', key_resp_9.duration);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Instructions10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_11_allKeys;
var task_errors;
var trialCount;
var breakTrials;
var block_count;
var intro_txtComponents;
function intro_txtRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'intro_txt' ---
    t = 0;
    intro_txtClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('intro_txt.started', globalClock.getTime());
    text_19.setText(introTXT);
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    task_errors = []
    trialCount=0;
    breakTrials = [30,60,90,120,150,180,210,240,270];
    
    block_count = 0;
    
    
    
    
    // keep track of which components have finished
    intro_txtComponents = [];
    intro_txtComponents.push(text_19);
    intro_txtComponents.push(key_resp_11);
    
    intro_txtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function intro_txtRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'intro_txt' ---
    // get current time
    t = intro_txtClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }
    
    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        key_resp_11.duration = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    intro_txtComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function intro_txtRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'intro_txt' ---
    intro_txtComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('intro_txt.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        psychoJS.experiment.addData('key_resp_11.duration', key_resp_11.duration);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "intro_txt" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var loop_numbers;
var initial_waitComponents;
function initial_waitRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'initial_wait' ---
    t = 0;
    initial_waitClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('initial_wait.started', globalClock.getTime());
    loop_numbers = 0;
    // keep track of which components have finished
    initial_waitComponents = [];
    initial_waitComponents.push(fixation_cross_4);
    
    initial_waitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function initial_waitRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'initial_wait' ---
    // get current time
    t = initial_waitClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_cross_4* updates
    if (t >= 0.0 && fixation_cross_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross_4.tStart = t;  // (not accounting for frame time here)
      fixation_cross_4.frameNStart = frameN;  // exact frame index
      
      fixation_cross_4.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross_4.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    initial_waitComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function initial_waitRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'initial_wait' ---
    initial_waitComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('initial_wait.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var reliability_cueComponents;
function reliability_cueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reliability_cue' ---
    t = 0;
    reliability_cueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reliability_cue.started', globalClock.getTime());
    fill_rectangle.setSize([rec_length, 0.05]);
    right_cue.setPos([right_cue_offset, 0]);
    right_cue.setSize([right_cue_length, 0.049]);
    left_cue.setPos([left_cue_offset, 0]);
    left_cue.setSize([left_cue_length, 0.049]);
    // keep track of which components have finished
    reliability_cueComponents = [];
    reliability_cueComponents.push(fill_rectangle);
    reliability_cueComponents.push(right_cue);
    reliability_cueComponents.push(left_cue);
    reliability_cueComponents.push(dividing_line);
    
    reliability_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function reliability_cueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reliability_cue' ---
    // get current time
    t = reliability_cueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fill_rectangle* updates
    if (t >= 0.0 && fill_rectangle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fill_rectangle.tStart = t;  // (not accounting for frame time here)
      fill_rectangle.frameNStart = frameN;  // exact frame index
      
      fill_rectangle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + reliability_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fill_rectangle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fill_rectangle.setAutoDraw(false);
    }
    
    // *right_cue* updates
    if (t >= 0.0 && right_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right_cue.tStart = t;  // (not accounting for frame time here)
      right_cue.frameNStart = frameN;  // exact frame index
      
      right_cue.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + reliability_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right_cue.setAutoDraw(false);
    }
    
    // *left_cue* updates
    if (t >= 0.0 && left_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left_cue.tStart = t;  // (not accounting for frame time here)
      left_cue.frameNStart = frameN;  // exact frame index
      
      left_cue.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + reliability_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left_cue.setAutoDraw(false);
    }
    
    // *dividing_line* updates
    if (t >= 0.0 && dividing_line.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      dividing_line.tStart = t;  // (not accounting for frame time here)
      dividing_line.frameNStart = frameN;  // exact frame index
      
      dividing_line.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + reliability_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (dividing_line.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      dividing_line.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    reliability_cueComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reliability_cueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reliability_cue' ---
    reliability_cueComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('reliability_cue.stopped', globalClock.getTime());
    // the Routine "reliability_cue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var isi2Components;
function isi2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'isi2' ---
    t = 0;
    isi2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('isi2.started', globalClock.getTime());
    // keep track of which components have finished
    isi2Components = [];
    isi2Components.push(fixation_cross2);
    
    isi2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function isi2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'isi2' ---
    // get current time
    t = isi2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_cross2* updates
    if (t >= 0.0 && fixation_cross2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross2.tStart = t;  // (not accounting for frame time here)
      fixation_cross2.frameNStart = frameN;  // exact frame index
      
      fixation_cross2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + delay_2_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    isi2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function isi2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'isi2' ---
    isi2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('isi2.stopped', globalClock.getTime());
    // the Routine "isi2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pingComponents;
function pingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ping' ---
    t = 0;
    pingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ping.started', globalClock.getTime());
    ping_im.setImage(ping_img);
    ping_im_2.setImage(ping_img);
    ping_im_3.setImage(ping_img);
    // keep track of which components have finished
    pingComponents = [];
    pingComponents.push(ping_im);
    pingComponents.push(fixation_cross2_2);
    pingComponents.push(ping_im_2);
    pingComponents.push(fixation_cross2_3);
    pingComponents.push(ping_im_3);
    
    pingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ping' ---
    // get current time
    t = pingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ping_im* updates
    if (t >= 0.0 && ping_im.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ping_im.tStart = t;  // (not accounting for frame time here)
      ping_im.frameNStart = frameN;  // exact frame index
      
      ping_im.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + ping_im_flash1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ping_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ping_im.setAutoDraw(false);
    }
    
    // *fixation_cross2_2* updates
    if (t >= 0.2 && fixation_cross2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross2_2.tStart = t;  // (not accounting for frame time here)
      fixation_cross2_2.frameNStart = frameN;  // exact frame index
      
      fixation_cross2_2.setAutoDraw(true);
    }
    
    frameRemains = 0.2 + ping_im_flash2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross2_2.setAutoDraw(false);
    }
    
    // *ping_im_2* updates
    if (t >= 0.4 && ping_im_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ping_im_2.tStart = t;  // (not accounting for frame time here)
      ping_im_2.frameNStart = frameN;  // exact frame index
      
      ping_im_2.setAutoDraw(true);
    }
    
    frameRemains = 0.4 + ping_im_flash3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ping_im_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ping_im_2.setAutoDraw(false);
    }
    
    // *fixation_cross2_3* updates
    if (t >= 0.6 && fixation_cross2_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross2_3.tStart = t;  // (not accounting for frame time here)
      fixation_cross2_3.frameNStart = frameN;  // exact frame index
      
      fixation_cross2_3.setAutoDraw(true);
    }
    
    frameRemains = 0.6 + ping_im_flash4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross2_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross2_3.setAutoDraw(false);
    }
    
    // *ping_im_3* updates
    if (t >= 0.8 && ping_im_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ping_im_3.tStart = t;  // (not accounting for frame time here)
      ping_im_3.frameNStart = frameN;  // exact frame index
      
      ping_im_3.setAutoDraw(true);
    }
    
    frameRemains = 0.8 + ping_im_flash5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ping_im_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ping_im_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ping' ---
    pingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('ping.stopped', globalClock.getTime());
    // the Routine "ping" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var noise_maskComponents;
function noise_maskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'noise_mask' ---
    t = 0;
    noise_maskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('noise_mask.started', globalClock.getTime());
    // keep track of which components have finished
    noise_maskComponents = [];
    noise_maskComponents.push(noise_mask_im);
    
    noise_maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function noise_maskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'noise_mask' ---
    // get current time
    t = noise_maskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *noise_mask_im* updates
    if (t >= 0.0 && noise_mask_im.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      noise_mask_im.tStart = t;  // (not accounting for frame time here)
      noise_mask_im.frameNStart = frameN;  // exact frame index
      
      noise_mask_im.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + noise_mask_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (noise_mask_im.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      noise_mask_im.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    noise_maskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function noise_maskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'noise_mask' ---
    noise_maskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('noise_mask.stopped', globalClock.getTime());
    // the Routine "noise_mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var isi3Components;
function isi3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'isi3' ---
    t = 0;
    isi3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('isi3.started', globalClock.getTime());
    // keep track of which components have finished
    isi3Components = [];
    isi3Components.push(fixation_cross_3);
    
    isi3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function isi3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'isi3' ---
    // get current time
    t = isi3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_cross_3* updates
    if (t >= 0.0 && fixation_cross_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_cross_3.tStart = t;  // (not accounting for frame time here)
      fixation_cross_3.frameNStart = frameN;  // exact frame index
      
      fixation_cross_3.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + delay_3_time - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (fixation_cross_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      fixation_cross_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    isi3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function isi3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'isi3' ---
    isi3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('isi3.stopped', globalClock.getTime());
    // the Routine "isi3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var remaining_blocks;
var block_breakComponents;
function block_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'block_break' ---
    t = 0;
    block_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('block_break.started', globalClock.getTime());
    break_txt.setText('take_break_txt');
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    trialCount = trialCount+1;
    remaining_blocks = breakTrials.length - block_count;
    
    loop_numbers = loop_numbers + 1;
    
    if (loop_numbers == 300) {
        continueRoutine = false; 
        loop_trials.finished = true;
        repeat_practice.finished = true;
        demo_prac_task.finished = true;
        trials_3.finished = true;
    };
    
    
    
    //skip break if it's not a break trial
    if (breakTrials.indexOf(trialCount) == -1) { 
        continueRoutine = false; 
    } 
    else {
        //otherwise update break text
        block_count =  block_count + 1;
        break_txt.text = "You can now take a short break.\n\n Please keep your break under 5 minutes. \n\n There are " + remaining_blocks.toString() + " blocks left. \n\n When you are ready, press 'SPACE' to resume the experiment.";
    };
    
    //flag_for_loop = 1;
    
    
    
    // keep track of which components have finished
    block_breakComponents = [];
    block_breakComponents.push(break_txt);
    block_breakComponents.push(key_resp);
    
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function block_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'block_break' ---
    // get current time
    t = block_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_txt* updates
    if (t >= 0.0 && break_txt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_txt.tStart = t;  // (not accounting for frame time here)
      break_txt.frameNStart = frameN;  // exact frame index
      
      break_txt.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // Run 'Each Frame' code from code_3
    //if (loop_trials.thisN == 1) {
    //    continueRoutine = false; 
    //    trials_3.finished = true;
    //};
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    block_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function block_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'block_break' ---
    block_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('block_break.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "block_break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_12_allKeys;
var repeat_practice_codeComponents;
function repeat_practice_codeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'repeat_practice_code' ---
    t = 0;
    repeat_practice_codeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('repeat_practice_code.started', globalClock.getTime());
    key_resp_12.keys = undefined;
    key_resp_12.rt = undefined;
    _key_resp_12_allKeys = [];
    mean_perf = mean_performance.reduce((a, b) => a + b) / mean_performance.length
    
    console.log('\nepoch summaries\n')
    console.log(mean_performance)
    console.log(mean_perf)
    console.log(mean_performance.length)
    
    //check if practice and mean accuracy is below a threshold
    if (mean_perf < .6 && taskPhase == 'practice') {
        console.log('repeating practice');
        mean_performance = [];
        }
    else if (mean_perf < .6 && taskPhase == 'demo') {
        console.log('repeating demo');
        mean_performance = [];
        }
    else {
        continueRoutine = false; 
        repeat_practice.finished = true;
    };
    
    
    // keep track of which components have finished
    repeat_practice_codeComponents = [];
    repeat_practice_codeComponents.push(repeat_prac_text);
    repeat_practice_codeComponents.push(key_resp_12);
    
    repeat_practice_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function repeat_practice_codeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'repeat_practice_code' ---
    // get current time
    t = repeat_practice_codeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *repeat_prac_text* updates
    if (t >= 0.0 && repeat_prac_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      repeat_prac_text.tStart = t;  // (not accounting for frame time here)
      repeat_prac_text.frameNStart = frameN;  // exact frame index
      
      repeat_prac_text.setAutoDraw(true);
    }
    
    
    // *key_resp_12* updates
    if (t >= 1 && key_resp_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_12.tStart = t;  // (not accounting for frame time here)
      key_resp_12.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_12.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_12.clearEvents(); });
    }
    
    if (key_resp_12.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_12.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_12_allKeys = _key_resp_12_allKeys.concat(theseKeys);
      if (_key_resp_12_allKeys.length > 0) {
        key_resp_12.keys = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].name;  // just the last key pressed
        key_resp_12.rt = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].rt;
        key_resp_12.duration = _key_resp_12_allKeys[_key_resp_12_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    repeat_practice_codeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function repeat_practice_codeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'repeat_practice_code' ---
    repeat_practice_codeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('repeat_practice_code.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_12.corr, level);
    }
    psychoJS.experiment.addData('key_resp_12.keys', key_resp_12.keys);
    if (typeof key_resp_12.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_12.rt', key_resp_12.rt);
        psychoJS.experiment.addData('key_resp_12.duration', key_resp_12.duration);
        routineTimer.reset();
        }
    
    key_resp_12.stop();
    // the Routine "repeat_practice_code" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_17_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions' ---
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions.started', globalClock.getTime());
    key_resp_17.keys = undefined;
    key_resp_17.rt = undefined;
    _key_resp_17_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Instructions_to_image_memory_test);
    InstructionsComponents.push(key_resp_17);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions' ---
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Instructions_to_image_memory_test* updates
    if (t >= 0.0 && Instructions_to_image_memory_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instructions_to_image_memory_test.tStart = t;  // (not accounting for frame time here)
      Instructions_to_image_memory_test.frameNStart = frameN;  // exact frame index
      
      Instructions_to_image_memory_test.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Instructions_to_image_memory_test.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Instructions_to_image_memory_test.setAutoDraw(false);
    }
    
    // *key_resp_17* updates
    if (t >= 0.0 && key_resp_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_17.tStart = t;  // (not accounting for frame time here)
      key_resp_17.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_17.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_17.clearEvents(); });
    }
    
    if (key_resp_17.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_17.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_17_allKeys = _key_resp_17_allKeys.concat(theseKeys);
      if (_key_resp_17_allKeys.length > 0) {
        key_resp_17.keys = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].name;  // just the last key pressed
        key_resp_17.rt = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].rt;
        key_resp_17.duration = _key_resp_17_allKeys[_key_resp_17_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions' ---
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_17.corr, level);
    }
    psychoJS.experiment.addData('key_resp_17.keys', key_resp_17.keys);
    if (typeof key_resp_17.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_17.rt', key_resp_17.rt);
        psychoJS.experiment.addData('key_resp_17.duration', key_resp_17.duration);
        routineTimer.reset();
        }
    
    key_resp_17.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _image_recall_response_allKeys;
var corner;
var colours;
var text_colours;
var number_list;
var labels;
var stimuli;
var startTime;
var image_recall_taskComponents;
function image_recall_taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'image_recall_task' ---
    t = 0;
    image_recall_taskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('image_recall_task.started', globalClock.getTime());
    image_input.setImage(ImagePath);
    image_recall_response.keys = undefined;
    image_recall_response.rt = undefined;
    _image_recall_response_allKeys = [];
    corner = [(-0.45), (- 0.45)];
    colours = (["white"] * 4);
    text_colours = (["black"] * 4);
    number_list = [1, 2, 3, 4];
    let number1;
    labels = ["Definitely Not Seen", "Probably Not Seen", "Probably Seen", "Definitely Seen"];
    stimuli = [];
      
    for (var i, _pj_c = 0, _pj_a = util.range(number_list.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
      i = _pj_a[_pj_c];
      number1 = number_list[i];
      let x_pos = (corner[0] + (i * 0.3));
      let y_pos = (corner[1] + 0.05);
      let w = psychoJS.window;
      let rect = new visual.Rect({win: psychoJS.window, size: [0.3, 0.3], pos: [x_pos, y_pos], fillColor: "black", name: `${colours[i]}_${number1}`});
      let text = new visual.TextStim({win: psychoJS.window, text: number1.toString(), height: 0.1, color: text_colours[i], pos: [x_pos, y_pos]});
      let label = new visual.TextStim({win: psychoJS.window, text: labels[i], height: 0.03, color: text_colours[i], pos: [x_pos, (y_pos + 0.1)]});
      stimuli.push(rect, text, label);
    }
    
    
    // Run 'Begin Routine' code from code_11
    startTime = psychoJS.monotonicClock.getTime();
    // keep track of which components have finished
    image_recall_taskComponents = [];
    image_recall_taskComponents.push(image_input);
    image_recall_taskComponents.push(image_recall_response);
    
    image_recall_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var minimumDisplayTime;
function image_recall_taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'image_recall_task' ---
    // get current time
    t = image_recall_taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_input* updates
    if (t >= 0.0 && image_input.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_input.tStart = t;  // (not accounting for frame time here)
      image_input.frameNStart = frameN;  // exact frame index
      
      image_input.setAutoDraw(true);
    }
    
    
    // *image_recall_response* updates
    if (t >= 0.0 && image_recall_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_recall_response.tStart = t;  // (not accounting for frame time here)
      image_recall_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { image_recall_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { image_recall_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { image_recall_response.clearEvents(); });
    }
    
    if (image_recall_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = image_recall_response.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _image_recall_response_allKeys = _image_recall_response_allKeys.concat(theseKeys);
      if (_image_recall_response_allKeys.length > 0) {
        image_recall_response.keys = _image_recall_response_allKeys[_image_recall_response_allKeys.length - 1].name;  // just the last key pressed
        image_recall_response.rt = _image_recall_response_allKeys[_image_recall_response_allKeys.length - 1].rt;
        image_recall_response.duration = _image_recall_response_allKeys[_image_recall_response_allKeys.length - 1].duration;
      }
    }
    
    // Run 'Each Frame' code from code_8
    //console.log(stimuli);
    
    for (var stimulus, _pj_c = 0, _pj_a = stimuli, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
         stimulus = _pj_a[_pj_c];
         stimulus.draw(true);
        }
    if (typeof minimumDisplayTime === 'undefined') {
      minimumDisplayTime = 3.0; // Redefine if not recognized
    }
    let currentTime = psychoJS.monotonicClock.getTime();
    // Calculate the elapsed time since the routine started
    let elapsedTime = currentTime - startTime;
    
    // Get keys if the minimum display time has passed
    if (elapsedTime >= minimumDisplayTime) {
        let keys = psychoJS.eventManager.getKeys({keyList: ['1', '2', '3', '4']});
        if (keys.length > 0) {
            // If a key is pressed after the minimum display time, end the routine
            continueRoutine = false;
        }
    }
    
    // Ensure the routine continues for at least 3 seconds, regardless of key presses
    if (elapsedTime < minimumDisplayTime) {
        continueRoutine = true;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    image_recall_taskComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function image_recall_taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'image_recall_task' ---
    image_recall_taskComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('image_recall_task.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(image_recall_response.corr, level);
    }
    psychoJS.experiment.addData('image_recall_response.keys', image_recall_response.keys);
    if (typeof image_recall_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('image_recall_response.rt', image_recall_response.rt);
        psychoJS.experiment.addData('image_recall_response.duration', image_recall_response.duration);
        }
    
    image_recall_response.stop();
    for (var stimulus, _pj_c = 0, _pj_a = stimuli, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
         stimulus = _pj_a[_pj_c];
         stimulus.setAutoDraw(false);
        }
    // the Routine "image_recall_task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var small_breakComponents;
function small_breakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'small_break' ---
    t = 0;
    small_breakClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('small_break.started', globalClock.getTime());
    // keep track of which components have finished
    small_breakComponents = [];
    small_breakComponents.push(text_27);
    
    small_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function small_breakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'small_break' ---
    // get current time
    t = small_breakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_27* updates
    if (t >= 0.0 && text_27.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_27.tStart = t;  // (not accounting for frame time here)
      text_27.frameNStart = frameN;  // exact frame index
      
      text_27.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_27.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_27.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    small_breakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function small_breakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'small_break' ---
    small_breakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('small_break.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var final_experiment_trials;
var _key_resp_18_allKeys;
var break_2Components;
function break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'break_2' ---
    t = 0;
    break_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(300.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('break_2.started', globalClock.getTime());
    //skip break if it's not a break trial
    if (final_experiment_trials != 74) { 
        continueRoutine = false; 
        final_experiment_trials = final_experiment_trials+1;
    } 
    else {
        //otherwise update break text
        final_experiment_trials = 0;
        break_txt_final.text = "You can now take a short break.\n\n Please keep your break under 5 minutes. \n\n Press 'SPACE' to resume the experiment.";
    };
    key_resp_18.keys = undefined;
    key_resp_18.rt = undefined;
    _key_resp_18_allKeys = [];
    // keep track of which components have finished
    break_2Components = [];
    break_2Components.push(break_txt_final);
    break_2Components.push(key_resp_18);
    
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function break_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'break_2' ---
    // get current time
    t = break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *break_txt_final* updates
    if (t >= 0.0 && break_txt_final.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_txt_final.tStart = t;  // (not accounting for frame time here)
      break_txt_final.frameNStart = frameN;  // exact frame index
      
      break_txt_final.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (break_txt_final.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      break_txt_final.setAutoDraw(false);
    }
    
    // *key_resp_18* updates
    if (t >= 0.0 && key_resp_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_18.tStart = t;  // (not accounting for frame time here)
      key_resp_18.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_18.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_18.clearEvents(); });
    }
    
    frameRemains = 0.0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_18.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_18.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_18.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_18.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_18_allKeys = _key_resp_18_allKeys.concat(theseKeys);
      if (_key_resp_18_allKeys.length > 0) {
        key_resp_18.keys = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].name;  // just the last key pressed
        key_resp_18.rt = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].rt;
        key_resp_18.duration = _key_resp_18_allKeys[_key_resp_18_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function break_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'break_2' ---
    break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('break_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_18.corr, level);
    }
    psychoJS.experiment.addData('key_resp_18.keys', key_resp_18.keys);
    if (typeof key_resp_18.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_18.rt', key_resp_18.rt);
        psychoJS.experiment.addData('key_resp_18.duration', key_resp_18.duration);
        routineTimer.reset();
        }
    
    key_resp_18.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_expComponents;
function end_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_exp' ---
    t = 0;
    end_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_exp.started', globalClock.getTime());
    // keep track of which components have finished
    end_expComponents = [];
    end_expComponents.push(thanks);
    
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_exp' ---
    // get current time
    t = end_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (thanks.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      thanks.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_expComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_exp' ---
    end_expComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_exp.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  document.body.style.cursor='auto'
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
