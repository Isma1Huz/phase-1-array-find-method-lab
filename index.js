function superbowlWin(record) {
    const win = record.find(e => e.result === "W");
    return win ? win.year : undefined;
  }
  