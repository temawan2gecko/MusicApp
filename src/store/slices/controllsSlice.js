import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTracks = createAsyncThunk(
  "controls/fetchTracks",
  async () => {
    const response = await fetch(
      "https://664f2b41fafad45dfae2a441.mockapi.io/music__trends"
    );
    const data = await response.json();
    return data;
  }
);
export const fetchCurrentlyTracks = createAsyncThunk(
  "controls/fetchCurrentlyTracks",
  async () => {
    const response = await fetch(
      "https://664f2b41fafad45dfae2a441.mockapi.io/currently__tracks"
    );
    const data = await response.json();
    return data;
  }
);

const controlsSlice = createSlice({
  name: "controls",
  initialState: {
    id: 0,
    tracks: [],
    currentlyTracks: [],
    isPlaying: false,
    currentTrack: 0,
    progress: 0,
    volume: 1,
  },
  reducers: {
    changeTrackById: (state, action) => {
      const trackId = action.payload;
      const trackIndex = state.tracks.findIndex(
        (track) => track.id === trackId
      );
      if (trackIndex !== -1) {
        state.currentTrack = trackIndex;
        state.isPlaying = true;
      }
    },
    playPause: (state) => {
      state.isPlaying = !state.isPlaying;
    },
    nextTrack: (state) => {
      state.currentTrack = (state.currentTrack + 1) % state.tracks.length;
      state.progress = 0;
    },
    prevTrack: (state) => {
      state.currentTrack =
        (state.currentTrack - 1 + state.tracks.length) % state.tracks.length;
      state.progress = 0;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      state.tracks = state.tracks.concat(action.payload);
    });
    builder.addCase(fetchCurrentlyTracks.fulfilled, (state, action) => {
      state.tracks = state.tracks.concat(action.payload);
    });
  },
});

export const {
  changeTrackById,
  playPause,
  nextTrack,
  prevTrack,
  setProgress,
  setVolume,
} = controlsSlice.actions;
export default controlsSlice.reducer;
