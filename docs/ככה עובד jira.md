# Jira — רשימת פיצ'רים מלאה
## מדריך ייחוס לבניית מערכת ניהול פרויקטים

---

## 1. יחידות עבודה (Issue Types)

| פיצ'ר | תיאור |
|:---|:---|
| **Epic** | קונטיינר גדול שמכיל Stories ו-Tasks — מייצג פיצ'ר גדול או יעד עסקי |
| **Story** | פיצ'ר מנקודת מבט המשתמש — "As a user I want to..." |
| **Task** | עבודה טכנית שאינה Story — setup, refactor, infrastructure |
| **Bug** | תקלה שדורשת תיקון |
| **Sub-task** | פירוק של Issue לחלקים קטנים יותר |
| **Spike** | מחקר/חקירה טכנית עם timeboxing מוגדר |
| **Issue** | המונח הגנרי — כל יחידת עבודה היא Issue |

---

## 2. שדות על כל Issue (Fields)

| שדה | תיאור |
|:---|:---|
| **Summary** | כותרת קצרה של ה-Issue |
| **Description** | תיאור מלא — תומך Markdown / Rich Text |
| **Assignee** | מי אחראי על ביצוע |
| **Reporter** | מי פתח את ה-Issue |
| **Priority** | Highest / High / Medium / Low / Lowest |
| **Status** | המצב הנוכחי — To Do / In Progress / In Review / Done |
| **Story Points** | הערכת מורכבות בסקאלת Fibonacci (1, 2, 3, 5, 8, 13, 21) |
| **Sprint** | לאיזה ספרינט ה-Issue שייך |
| **Epic Link** | קישור ל-Epic האב |
| **Fix Version** | לאיזו גרסת release מיועד |
| **Labels** | תיוג חופשי לסינון וקיבוץ |
| **Components** | חלוקה לוגית של ה-codebase (frontend, backend, auth, payments) |
| **Linked Issues** | קשרים בין Issues: blocks / is blocked by / relates to / duplicates / clones |
| **Attachments** | קבצים, screenshots, קישורים |
| **Comments** | שיחה פנימית על ה-Issue עם @mentions |
| **Time Tracking** | Original Estimate / Time Spent / Remaining Estimate |
| **Due Date** | תאריך יעד לסיום |
| **Custom Fields** | שדות מותאמים אישית לכל צוות (dropdown, text, date, number, user) |
| **Watchers** | אנשים שמקבלים התראות על שינויים ב-Issue |
| **Votes** | הצבעה על חשיבות Issue |
| **Environment** | סביבה שבה הבאג הופיע (production, staging, dev) |

---

## 3. Workflow — תהליך עבודה

| פיצ'ר | תיאור |
|:---|:---|
| **Statuses** | מצבים שה-Issue עובר דרכם (To Do, In Progress, Code Review, QA, Done) |
| **Transitions** | מעברים מוגדרים בין Statuses — לא כל מעבר מותר |
| **Conditions** | מי מורשה לבצע Transition מסוים |
| **Validators** | מה חייב להיות מלא לפני שמעבר מתאפשר |
| **Post Functions** | פעולות אוטומטיות שמתרחשות בעת Transition (שינוי שדה, שליחת התראה) |
| **Workflow Schemes** | שיוך workflow שונה לכל Issue Type |
| **Global Transitions** | מעבר שאפשר לבצע מכל Status (למשל "Reopen") |

---

## 4. Boards — לוחות עבודה

| פיצ'ר | תיאור |
|:---|:---|
| **Scrum Board** | לוח ספרינט — Issues מסודרים בעמודות לפי Status |
| **Kanban Board** | זרימה רציפה ללא ספרינטים — WIP limits על כל עמודה |
| **Backlog View** | רשימת כל ה-Issues הממתינים לתכנון, מחוץ לספרינט |
| **Swimlanes** | חלוקת הלוח לשורות — לפי Assignee, Epic, Priority, או Query מותאם |
| **Quick Filters** | כפתורי סינון מהירים על הלוח (My Issues, Flagged, Unassigned) |
| **Card Colors** | צביעת כרטיסים לפי Priority, Assignee, Label, או Query |
| **WIP Limits** | הגבלת מספר Issues בעמודה ב-Kanban |
| **Board Configuration** | הגדרת עמודות, מיפוי Statuses לעמודות, swimlanes |
| **Estimation** | הגדרת שיטת ההערכה (Story Points / Original Time Estimate) |

---

## 5. Sprints

| פיצ'ר | תיאור |
|:---|:---|
| **Sprint** | מחזור עבודה מוגבל בזמן — בדרך כלל 1–4 שבועות |
| **Sprint Goal** | מטרה עסקית מוגדרת לספרינט |
| **Sprint Planning** | גרירת Issues מה-Backlog לספרינט עם הערכת Story Points |
| **Start Sprint** | פתיחה רשמית של הספרינט עם תאריכי התחלה וסיום |
| **Complete Sprint** | סגירת ספרינט — Issues שלא הושלמו עוברים לספרינט הבא או ל-Backlog |
| **Active Sprint** | הספרינט הפעיל הנוכחי |
| **Future Sprints** | ספרינטים מתוכננים מראש |
| **Backlog Refinement** | תהליך עדכון, הערכה ותעדוף ה-Backlog |

---

## 6. Roadmap & Planning

| פיצ'ר | תיאור |
|:---|:---|
| **Roadmap (Timeline View)** | תצוגת Gantt של Epics לאורך ציר זמן |
| **Dependency Lines** | קווי תלות בין Epics ב-Roadmap |
| **Versions / Releases** | תכנון גרסאות עם תאריכי release ו-Issues משויכים |
| **Release Hub** | מרכז ניהול כל ה-Releases של הפרויקט |
| **Capacity Planning** | תכנון עומס עבודה לפי חבר צוות וספרינט |
| **Goals** | יעדים עסקיים ברמה גבוהה מעל Epics (Jira Plans) |

---

## 7. Backlog Management

| פיצ'ר | תיאור |
|:---|:---|
| **Backlog** | רשימת כל ה-Issues הממתינים לתכנון |
| **Drag & Drop Prioritization** | סידור מחדש של Issues לפי עדיפות |
| **Bulk Edit** | עריכת מספר Issues בבת אחת |
| **Epic Panel** | פאנל צדדי לסינון Backlog לפי Epic |
| **Versions Panel** | פאנל צדדי לסינון לפי גרסה |
| **Ranking** | סדר עדיפויות מספרי לכל Issue |

---

## 8. Reporting & Charts

| דוח | תיאור |
|:---|:---|
| **Burndown Chart** | קצב השלמת Story Points במהלך הספרינט |
| **Burnup Chart** | התקדמות כוללת לעומת scope הספרינט |
| **Velocity Chart** | ממוצע Story Points שהושלמו לספרינט לאורך זמן |
| **Sprint Report** | סיכום ספרינט — Completed / Not Completed / Removed |
| **Cumulative Flow Diagram (CFD)** | זרימת Issues לפי Status לאורך זמן — מזהה bottlenecks |
| **Control Chart** | Cycle Time — כמה זמן Issue נמצא In Progress בממוצע |
| **Epic Report** | התקדמות Epic לפי Story Points — Completed vs. Remaining |
| **Epic Burndown** | קצב עבודה לעומת scope ה-Epic |
| **Version Report** | Issues לפי גרסה — Completed / Unresolved |
| **Release Burndown** | קצב עבודה לקראת Release מסוים |
| **Time Tracking Report** | זמן מוערך vs. זמן בפועל לפי Issue |
| **User Workload** | עומס עבודה לפי חבר צוות |
| **Dashboards** | לוחות מותאמים עם Gadgets — ניתן לשתף עם הצוות |
| **Gadgets** | רכיבי Dashboard: Pie Chart, Two-Dimensional Filter, Activity Stream, Assigned to Me |

---

## 9. Filters & JQL (Jira Query Language)

| פיצ'ר | תיאור |
|:---|:---|
| **Basic Filter** | סינון ויזואלי לפי Project, Issue Type, Status, Assignee |
| **JQL (Advanced)** | שפת שאילתות מלאה — `project = X AND assignee = currentUser() AND sprint in openSprints()` |
| **Saved Filters** | שמירת JQL queries לשימוש חוזר |
| **Filter Sharing** | שיתוף Filters עם Users, Groups, או כל הארגון |
| **Filter Subscriptions** | קבלת דוח מייל תקופתי על תוצאות Filter |
| **Issue Navigator** | תצוגת רשימה/פירוט לתוצאות Filter |
| **Export** | ייצוא תוצאות ל-CSV / Excel |

**דוגמאות JQL נפוצות:**
```
assignee = currentUser() AND status != Done
project = "MyApp" AND sprint in openSprints() AND priority = High
created >= -7d AND issuetype = Bug AND status = "To Do"
```

---

## 10. Automation

| פיצ'ר | תיאור |
|:---|:---|
| **Automation Rules** | Trigger → Condition → Action |
| **Triggers** | Issue Created, Status Changed, Field Value Changed, Sprint Started/Completed, Scheduled, Webhook |
| **Conditions** | סינון — Issue Type, Priority, JQL Query, User Condition |
| **Actions** | Assign Issue, Transition Status, Edit Fields, Create Sub-task, Add Comment, Send Email/Slack, Webhook |
| **Smart Values** | משתנים דינמיים — `{{issue.summary}}`, `{{issue.assignee.displayName}}`, `{{now}}` |
| **Rule Templates** | תבניות מוכנות: Auto-assign, Auto-close, Escalation |
| **Audit Log** | היסטוריית הרצות של כל Rule |
| **Multi-project Rules** | Rule שרץ על מספר פרויקטים |

---

## 11. Notifications & Activity

| פיצ'ר | תיאור |
|:---|:---|
| **Notification Scheme** | מי מקבל התראה על אילו אירועים |
| **@mentions** | ציון משתמש בתגובה — שולח התראה ישירה |
| **Watch Issue** | מעקב אחרי Issue ספציפי |
| **Activity Stream** | פיד פעילות של כל השינויים ב-Issue |
| **Issue History** | לוג מלא של כל שינוי שנעשה ב-Issue עם timestamp ומשתמש |
| **Email Notifications** | התראות מייל לפי אירועים (Created, Updated, Commented, Resolved) |

---

## 12. Project Configuration

| פיצ'ר | תיאור |
|:---|:---|
| **Project Types** | Scrum / Kanban / Business (team-managed vs. company-managed) |
| **Project Settings** | שם, תיאור, Lead, Category, Avatar |
| **Issue Type Schemes** | אילו Issue Types זמינים בפרויקט |
| **Workflow Schemes** | איזה Workflow משויך לכל Issue Type |
| **Screen Schemes** | אילו שדות מוצגים ב-Create / Edit / View |
| **Field Configuration** | שדות חובה, שדות מוסתרים, ברירות מחדל |
| **Permission Schemes** | מי יכול לעשות מה בפרויקט |
| **Notification Schemes** | מי מקבל התראות על אילו אירועים |
| **Components** | הגדרת רכיבי הפרויקט עם Component Lead |
| **Versions** | ניהול גרסאות הפרויקט |

---

## 13. User & Permission Management

| פיצ'ר | תיאור |
|:---|:---|
| **Users** | ניהול משתמשים — הוספה, הסרה, deactivation |
| **Groups** | קבוצות משתמשים לניהול הרשאות |
| **Roles** | תפקידים בפרויקט: Admin, Developer, Viewer |
| **Permission Schemes** | הגדרת הרשאות לפי Role/Group: Create, Edit, Delete, Assign, Resolve |
| **Project Access** | Public / Private / Limited |
| **Global Permissions** | הרשאות ברמת המערכת: Administer Jira, Create Projects, Browse Users |

---

## 14. Integrations

| אינטגרציה | תיאור |
|:---|:---|
| **GitHub / GitLab / Bitbucket** | קישור commits, PRs, branches ל-Issues — מציג dev activity ב-Issue |
| **Confluence** | קישור דפי תיעוד ל-Issues |
| **Slack** | התראות על שינויי Status, mentions, assignments |
| **Microsoft Teams** | התראות ועדכונים |
| **Figma** | הצגת עיצובים ישירות ב-Issue |
| **Zendesk / Intercom** | קישור support tickets ל-Issues |
| **CI/CD (Jenkins, GitHub Actions, CircleCI)** | עדכון Status אוטומטי בעת build/deploy |
| **REST API** | גישה מלאה לכל הנתונים — Create, Read, Update, Delete Issues |
| **Webhooks** | שליחת events לשירותים חיצוניים |
| **Marketplace Apps** | אלפי תוספים: Tempo (time tracking), Zephyr (QA), Structure (hierarchy) |

---

## 15. Search & Navigation

| פיצ'ר | תיאור |
|:---|:---|
| **Global Search** | חיפוש Issues, Projects, Boards, Users בכל המערכת |
| **Quick Search** | חיפוש מהיר עם קיצור מקלדת |
| **Recent Items** | Issues ו-Projects שנצפו לאחרונה |
| **Starred Projects** | פרויקטים מועדפים |
| **Issue Navigator** | תצוגת רשימה/פירוט לתוצאות חיפוש |
| **Keyboard Shortcuts** | קיצורי מקלדת לניווט מהיר |

---

## 16. פיצ'רים שמתכנתים משתמשים בהם הכי הרבה ביומיום

```
Backlog → Sprint Board → Issue (Status transitions) → Story Points
→ JQL Filters → Burndown Chart → GitHub Integration → @mentions
```

---

## 17. סדר עדיפויות לבנייה (MVP → Full Product)

### MVP — חובה ביום הראשון
- Issues (Create, Edit, Delete, View)
- Issue Types (Epic, Story, Task, Bug)
- Statuses + Transitions (Workflow בסיסי)
- Assignee, Priority, Description, Comments
- Scrum Board (Backlog + Active Sprint)
- Sprint (Start, Complete)
- Basic Search + Filters

### Phase 2 — חשוב מאוד
- Story Points + Velocity Chart
- Burndown Chart
- JQL / Advanced Search
- Sub-tasks
- Linked Issues
- Labels, Components, Versions
- Notifications + @mentions
- GitHub Integration

### Phase 3 — Full Product
- Roadmap (Timeline)
- Automation Rules
- Custom Fields
- Custom Workflows
- Dashboards + Gadgets
- Permission Schemes
- Kanban Board + WIP Limits
- Time Tracking
- REST API + Webhooks

---

*מסמך זה מבוסס על Jira Software Cloud ו-Data Center — יוני 2026*
