import os from 'os';
import {Config} from 'remotion';

Config.Rendering.setConcurrency(os.cpus().length);
Config.Output.setOverwriteOutput(true);
