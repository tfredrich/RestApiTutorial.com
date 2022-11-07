module.exports = {
  changelogFilename: "exampleSite/content/basics/CHANGELOG.md",
  dataSource: "milestones",
  groupBy: {
    "Enhancements": [
      "feature",
    ],
    "Fixes": [
      "bug"
    ],
    "Maintenance": [
      "task",
    ],
    "Uncategorised": [
      "closed",
    ],
  },
  ignoreLabels: [
    "hugo",
  ],
  ignoreIssuesWith: [
    "discussion",
    "documentation",
    "duplicate",
    "invalid",
    "support",
    "wontfix",
  ],
  ignoreTagsWith: [
    "Relearn",
  ],
  milestoneMatch: "{{tag_name}}",
  onlyMilestones: true,
  template: {
    group: "\n### {{heading}}\n",
    release: ({ body, date, release }) => `## ${release} (` + date.replace( /(\d+)\/(\d+)\/(\d+)/, '$3-$2-$1' ) + `)\n${body}`,
  },
};
