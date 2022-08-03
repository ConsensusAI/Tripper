module.exports = function (router, database) {
  // Get User Info
  router.get("/", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    let userId = 1;
    database
      .getUserInfo(userId)
      .then((user) => res.send({ user }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Get User Plans
  router.get("/plans", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    let userId = 1;
    database
      .getPlansForUser(userId)
      .then((plan) => res.send({ plan }))
      .catch((e) => {
        res.send(e);
      });
  });

  // Get Events For Plan
  router.get("/plans/:planId", (req, res) => {
    // let userId = Number(req.cookies["userId"]);
    // console.log(userId);
    // let userId = 1;
    let planId = req.params.planId;
    database
      .getEventsForPlan(planId)
      .then((event) => res.send({ event }))
      .catch((e) => {
        res.send(e);
      });
  });
};