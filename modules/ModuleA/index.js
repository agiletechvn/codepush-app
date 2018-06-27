import React, { Component } from "react";
import { Button } from "react-native";
import App from "../../App";

App.modules.set("ModuleA", () => (
  <Button onPress={() => alert("ok")} title="Module A update" />
));
