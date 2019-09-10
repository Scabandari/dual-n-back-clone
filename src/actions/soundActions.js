import { UPDATE_SOUND_FILE, TOGGLE_SOUND } from './types'

export const toggleSound = bool => {
    return {
        type: TOGGLE_SOUND,
        payload: bool
    }
}