// Block Definitions
Blockly.Blocks['move_up'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Genda Waggulu");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square up one cell");
  }
};

Blockly.Blocks['move_down'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Genda Wansi");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square down one cell");
  }
};

Blockly.Blocks['move_left'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Genda Konno");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square left one cell");
  }
};


Blockly.Blocks['move_right'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Genda ku Ddyo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Move the square right one cell");
  }
};


Blockly.Blocks['wait_block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("lindamu")
      .appendField(new Blockly.FieldNumber(1, 0, 10), "SECONDS");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  }
};

Blockly.Blocks['set_home'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("settinga_ewatandikirwa")
      .appendField("Row:")
      .appendField(new Blockly.FieldNumber(0), "ROW")
      .appendField("Col:")
      .appendField(new Blockly.FieldNumber(0), "COL");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(160);
  } }
  ;

  Blockly.Blocks['get_row'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Row gyolimu");
      this.setOutput(true, "Number");
      this.setColour(160);
    }
  };

  Blockly.Blocks['get_col'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Column gyolimu");
      this.setOutput(true, "Number");
      this.setColour(160);
    }
  };


  Blockly.Blocks['get_total_cols'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("funa total columns");
      this.setOutput(true, "Number");
      this.setColour(160);
    }
  };
  

  Blockly.Blocks['start_history'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("tandika okutereka history");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(200);
    }
  };

  Blockly.Blocks['stop_history'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("lekerawo okutereka history");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(200);
    }
  };


  Blockly.Blocks['retrace_path'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Ddayo gyewavude");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(200);
    }
  };


  Blockly.Blocks['set_keyboard_control'] = {
    init: function() {
      this.appendValueInput("KEY")
        .setCheck("String")
        .appendField("Fuga entambula ne keyboard");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(240);
    }
  };


  Blockly.Blocks['key_options'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["Arrow Keys", "ARROWS"],
          ["WASD", "WASD"],
          ["IJKL", "IJKL"]
        ]), "KEY_OPTION");
      this.setOutput(true, "String");
      this.setColour(240);
    }
  };


  Blockly.Blocks['set_mouse_control'] = {
    init: function() {
      this.appendValueInput("BUTTON")
        .setCheck("String")
        .appendField("Fuga entambula ne mouse");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(240);
    }
  };



  Blockly.Blocks['mouse_options'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ["Left Click", "LEFT"],
          ["Right Click", "RIGHT"],
          ["Middle Click", "MIDDLE"]
        ]), "MOUSE_OPTION");
      this.setOutput(true, "String");
      this.setColour(240);
    }
  };


  Blockly.Blocks['row_by_row'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("tambula row ku row");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['column_by_column'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("tambula column ku column");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };


  Blockly.Blocks['diagonal_path'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("tambula diagonal");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['outer_edge'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Tambilira Wabweru");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };
  
  Blockly.Blocks['spiral_inward'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Tambula kikovu paka mu makati");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };
  Blockly.Blocks['zigzag_pattern'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula zigizaga");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['checkerboard_pattern'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula row ku row");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };


  Blockly.Blocks['random_walk'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula random")
        .appendField(new Blockly.FieldNumber(20, 1, 100), "STEPS");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['snake_pattern'] = {
    init: function() {
      this.appendDummyInput()
        .appendField("Tambula nga omusota");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['spiral_outward'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula kikovu paka wabwelu");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['x_pattern'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula mu x");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['corners_to_center'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula nsonda nga odda mu makati");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['wave_pattern'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula nga egyengo'");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['diamond_pattern'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula nga Diamond");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['fibonacci_spiral'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula ne kikovu kya  fibonacci");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['binary_tree'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tmabula nga binary tree");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };

  Blockly.Blocks['knight_tour'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Tambula nga knight");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setColour(280);
    }
  };
