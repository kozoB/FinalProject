require("../database");
const Category = require("../models/Category");
const product = require("../models/product");
const Pn = require("../models/Pn");


exports.exploreStatistics = async (req, res) => {
    try {
      const limitNumber = 20;
      const products = await product.find({}).limit(limitNumber);
      res.render("StatisticsPage", {
        title: "Statistics",
        products,
      });
    } catch (error) {
      res.satus(500).send({ message: error.message || "Error Occured" });
    }
  };


/*
const el = d3.select("#d3_svg_demo2");

d3.json("https://raw.githubusercontent.com/iamspruce/intro-d3/main/nigeria-states.json").then(({data}) => {
    el
     .selectAll("p")
     .data(data)
	 .join("p")
	  .text((d) => d.Name)
});

const width = 960, height = 500;
const x_scale = d3.scaleBand().range([0, width])
const y_scale = d3.scaleLinear().range([height, 0])

const svg = d3.select("#d3_demo")
    .attr("width", width)
    .attr("height", height)
*/