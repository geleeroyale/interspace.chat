const domain = 'meet.jit.si'

export const JitsiInstances = ['tisch1', 'tisch2', 'tisch3', 'tisch4', 'tisch5']

export const RoomURLs = {
  Tisch1: {
    jitsi: {
      domain,
      roomName: 'tisch1'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/nKCuNrg/house-of-defiance'
    },
    youtube: {
      videoId: 'X5k8Cbr0d44',
      externalUrl: 'https://youtu.be/X5k8Cbr0d44'
    }
  },
  Tisch2: {
    jitsi: { domain, roomName: 'tisch2' },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/eJZGNU5/house-of-daos'
    },
    youtube: {
      videoId: 'k0UpUwmKaHc',
      externalUrl: 'https://youtu.be/k0UpUwmKaHc'
    }
  },
  Tisch3: {
    jitsi: {
      domain,
      roomName: 'tisch3'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/tpKKcfA/house-of-adoption'
    },
    youtube: {
      videoId: '_DxQQKrxYFI',
      externalUrl: 'https://youtu.be/_DxQQKrxYFI'
    }
  },
  Tisch4: {
    jitsi: {
      domain,
      roomName: 'tisch4'
    },
    mozillaHub: {
      externalUrl: 'https://hubs.mozilla.com/nx5rV57/stress-test-arena'
    },
    youtube: {
      videoId: 'pWfUAjIgoJM',
      externalUrl: 'https://youtu.be/pWfUAjIgoJM'
    }
  },
  Tisch5: {
    jitsi: {
      domain,
      roomName: 'tisch5'
    },
    mozillaHub: { externalUrl: 'https://hubs.mozilla.com/LmrJQqL/raid-guild' },
    youtube: {
      videoId: 'f2bnDe5-3mM',
      externalUrl: 'https://youtu.be/p7gJTpauAgk'
    }
  }
}

export const RoomNames = Object.keys(RoomURLs)
