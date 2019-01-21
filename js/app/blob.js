$(document).ready(function () {
    var blobBlock = document.getElementById('blob');

    if (blobBlock) {
        var blob = new BlobAnimation("blob", {

            //Blob main settings
            BLOB_SIZE: 200,
            BLOB_DISTANCE: 1000,
            DETALISATION: 60,
            PERSPECTIVE_DISTORTION: 0,
            ROTATION_SPEED: 5,

            //Dot settins
            DOT_SIZE: 2,
            DOT_COLOR: "#999999",

            //Mouse settings
            MOUSE_DISTANCE_MIN: 20,
            MOUSE_DISTANCE_MAX: 400,
            MOUSE_SENSITIVITY: 1,
            INERTIAL_TIME: 2,

            //Shape settins
            //Shape main settings
            INITIAL_SHAPE: {
                wave1: {
                    amplitude: 10,
                    frequency: 3,
                    phase: 2
                },
                wave2: {
                    amplitude: 60,
                    frequency: 2,
                    phase: 2
                },
                wave3: {
                    amplitude: 10,
                    frequency: 3,
                    phase: 2
                }
            },
            USE_MORPHING: true,
            USE_WAVE_MOTION: true,
            USE_WAVE_SWING: false,

            //Morphing settings
            MORPHING_AUTOPLAY: true,
            MORPHING_DURATION: 2,
            MORPHING_DELAY: 2,
            MORPHING_TRANSITION_TYPE: "cubic",
            MORPHING_SHAPES: [
                {
                    wave1: {
                        amplitude: 17.582,
                        frequency: 3.736,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 32.967,
                        frequency: 3.846,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 128.571,
                        frequency: 1.044,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 59.341,
                        frequency: 4.78,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 27.473,
                        frequency: 4.286,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 12.088,
                        frequency: 1.319,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 106.593,
                        frequency: 1.319,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 114.286,
                        frequency: 0.989,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 0,
                        frequency: 2,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 54.945,
                        frequency: 4.286,
                        phase: 4.246
                    },
                    wave2: {
                        amplitude: 163.736,
                        frequency: 0,
                        phase: 5.213
                    },
                    wave3: {
                        amplitude: 0,
                        frequency: 0,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 93.407,
                        frequency: 2.582,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 29.67,
                        frequency: 0.824,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 27.473,
                        frequency: 1.319,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 95.604,
                        frequency: 0.769,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 150,
                        frequency: 0.989,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 120.736,
                        frequency: 0,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 31.868,
                        frequency: 2.857,
                        phase: 0
                    },
                    wave2: {
                        amplitude: 29.67,
                        frequency: 3.571,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 35.165,
                        frequency: 3.242,
                        phase: 0
                    }
										},
                {
                    wave1: {
                        amplitude: 32.967,
                        frequency: 3.978,
                        phase: 0.552
                    },
                    wave2: {
                        amplitude: 18.681,
                        frequency: 5,
                        phase: 0
                    },
                    wave3: {
                        amplitude: 17.582,
                        frequency: 1.319,
                        phase: 0.725
                    }
								   		}
									 ],

            //Wave motion settings
            WAVE_1_MOTION_SPEED: 1.7,
            WAVE_2_MOTION_SPEED: 1,
            WAVE_3_MOTION_SPEED: 3

        });
    };

    var blobBg = document.getElementById('blob-bg');

    if (blobBg) {
        var blob = new BlobAnimation("blob-bg", {

            //Blob main settings
            BLOB_SIZE: 220,
            BLOB_DISTANCE: 0,
            DETALISATION: 60,
            PERSPECTIVE_DISTORTION: 5,
            ROTATION_SPEED: 2,

            //Dot settins
            DOT_SIZE: 1,
            DOT_COLOR: "#556677",

            //Mouse settings
            MOUSE_DISTANCE_MIN: 20,
            MOUSE_DISTANCE_MAX: 20000,
            MOUSE_SENSITIVITY: 0.1,
            INERTIAL_TIME: 2,

            //Shape settins
            //Shape main settings
            INITIAL_SHAPE: {
                wave1: {
                    amplitude: 70,
                    frequency: 3,
                    phase: 0
                },
                wave2: {
                    amplitude: 60,
                    frequency: 2,
                    phase: 0
                },
                wave3: {
                    amplitude: 50,
                    frequency: 2,
                    phase: 0
                }
            },
            USE_MORPHING: false,
            USE_WAVE_MOTION: true,
            USE_WAVE_SWING: false,

            //Wave motion settings
            WAVE_1_MOTION_SPEED: 0.85,
            WAVE_2_MOTION_SPEED: 0.5,
            WAVE_3_MOTION_SPEED: 1.5
        });
    };
});
