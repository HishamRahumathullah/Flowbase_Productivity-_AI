"use client";

import { useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Folder,
  KanbanSquare,
  LayoutDashboard,
  LibraryBig,
  MessageSquareText,
  PenTool,
  Plus,
  Search,
  Settings,
  Sparkles,
  StickyNote,
  WandSparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navGroups = [
  {
    label: "Workspace",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, color: "text-[#e26f5c]", active: true },
      { label: "AI Assistant", icon: Sparkles, color: "text-[#8f73d9]" },
      { label: "Calendar", icon: CalendarDays, color: "text-[#d69a2d]" },
      { label: "Tasks/Kanban", icon: KanbanSquare, color: "text-[#2f9f8f]" },
    ],
  },
  {
    label: "Create",
    items: [
      { label: "Notes", icon: StickyNote, color: "text-[#c9853e]" },
      { label: "Whiteboard", icon: PenTool, color: "text-[#3f94d3]" },
      { label: "Pages/Spaces", icon: LibraryBig, color: "text-[#6da45f]" },
      { label: "AI Template Builder", icon: WandSparkles, color: "text-[#d66f9a]" },
    ],
  },
  {
    label: "System",
    items: [{ label: "Settings", icon: Settings, color: "text-[#7b8794]" }],
  },
];

const folders = [
  { name: "Product Roadmap", color: "bg-[#e26f5c]" },
  { name: "Research Notes", color: "bg-[#2f9f8f]" },
  { name: "Sprint Planning", color: "bg-[#d69a2d]" },
  { name: "Personal Space", color: "bg-[#8f73d9]" },
];

const overviewCards = [
  { label: "Open tasks", value: "24", note: "6 due this week", color: "bg-[#fff4d8]" },
  { label: "Active spaces", value: "8", note: "3 shared boards", color: "bg-[#e3f7f1]" },
  { label: "AI drafts", value: "12", note: "ready to refine", color: "bg-[#f1edff]" },
];

const todayTasks = [
  "Shape onboarding whiteboard",
  "Review launch task board",
  "Summarize research notes",
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f4ec] text-[#2d2f2c]">
      <div className="flex min-h-screen">
        <aside
          className={cn(
            "sticky top-0 flex h-screen shrink-0 flex-col border-r border-[#e0e6d8] bg-[#fbfff8]/95 px-3 py-4 shadow-[6px_0_24px_rgba(60,84,74,0.06)] transition-all duration-300",
            collapsed ? "w-[76px]" : "w-[248px]"
          )}
        >
          <div className="flex h-11 items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-2">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#2f9f8f] text-sm font-bold text-white shadow-sm">
                Fb
              </div>
              <div
                className={cn(
                  "min-w-0 transition-opacity duration-200",
                  collapsed && "pointer-events-none opacity-0"
                )}
              >
                <p className="truncate text-sm font-semibold leading-5 text-[#2d2f2c]">Flowbase</p>
                <p className="truncate text-[11px] font-medium text-[#748176]">Fresh work hub</p>
              </div>
            </div>
            <Button
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              className="h-8 w-8 shrink-0 border-[#dde8d7] bg-[#f3fbf1] text-[#617168] hover:bg-[#e9f5e6]"
              size="icon"
              variant="outline"
              onClick={() => setCollapsed((value) => !value)}
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </div>

          <nav className="mt-6 flex flex-1 flex-col gap-5 overflow-y-auto overflow-x-hidden">
            {navGroups.map((group) => (
              <div key={group.label}>
                <p
                  className={cn(
                    "mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b988c] transition-opacity",
                    collapsed && "opacity-0"
                  )}
                >
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        className={cn(
                          "flex h-9 w-full items-center gap-2.5 rounded-lg px-2 text-left text-[13px] font-medium text-[#59645c] transition hover:bg-[#edf7e9] hover:text-[#2d2f2c]",
                          item.active && "bg-[#e3f7f1] text-[#2d2f2c] shadow-sm",
                          collapsed && "justify-center px-0"
                        )}
                        key={item.label}
                        title={collapsed ? item.label : undefined}
                        type="button"
                      >
                        <Icon className={cn("h-[18px] w-[18px] shrink-0", item.color)} strokeWidth={2.2} />
                        <span className={cn("truncate transition-opacity", collapsed && "sr-only")}>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="mt-auto">
              <div className="mb-2 flex items-center justify-between px-2">
                <p
                  className={cn(
                    "text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8b988c] transition-opacity",
                    collapsed && "opacity-0"
                  )}
                >
                  Folders
                </p>
                {!collapsed && (
                  <button
                    aria-label="Add folder"
                    className="grid h-6 w-6 place-items-center rounded-md text-[#748176] hover:bg-[#edf7e9]"
                    type="button"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
              <div className="space-y-1">
                {folders.map((folder) => (
                  <button
                    className={cn(
                      "flex h-8 w-full items-center gap-2 rounded-lg px-2 text-left text-[12px] font-medium text-[#667269] hover:bg-[#edf7e9]",
                      collapsed && "justify-center px-0"
                    )}
                    key={folder.name}
                    title={collapsed ? folder.name : undefined}
                    type="button"
                  >
                    <Folder className="h-4 w-4 shrink-0 text-[#8daa85]" />
                    <span className={cn("h-2 w-2 shrink-0 rounded-full", folder.color, collapsed && "hidden")} />
                    <span className={cn("truncate transition-opacity", collapsed && "sr-only")}>{folder.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </aside>

        <section className="flex min-w-0 flex-1 flex-col">
          <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[#e0e6d8] bg-[#fbfff8]/80 px-5 py-3 backdrop-blur">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8b988c]">Dashboard</p>
              <h1 className="text-2xl font-semibold text-[#2d2f2c]">Today&apos;s workspace</h1>
            </div>
            <div className="flex min-w-[260px] flex-1 justify-end gap-2">
              <label className="flex h-9 w-full max-w-[360px] items-center gap-2 rounded-lg border border-[#dfe6d8] bg-white/85 px-3 text-sm text-[#69746c] shadow-sm">
                <Search className="h-4 w-4 text-[#88a086]" />
                <input
                  className="w-full bg-transparent text-[13px] outline-none placeholder:text-[#9da99c]"
                  placeholder="Search spaces, boards, notes"
                  type="search"
                />
              </label>
              <Button className="h-9 rounded-lg bg-[#2f9f8f] px-3 text-[13px] text-white hover:bg-[#288d80]">
                <Sparkles className="mr-2 h-4 w-4" />
                Ask AI
              </Button>
            </div>
          </header>

          <div className="grid flex-1 gap-4 p-5 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="min-w-0 space-y-4">
              <section className="rounded-lg border border-[#e0e6d8] bg-[#fbfff8] p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-[#748176]">Focus board</p>
                    <h2 className="mt-1 text-3xl font-semibold leading-tight text-[#2d2f2c]">
                      Plan, write, and map ideas in one calm place.
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg bg-[#ecf7e8] px-3 py-2 text-xs font-semibold text-[#596f60]">
                    <Clock3 className="h-4 w-4 text-[#d69a2d]" />
                    4 blocks today
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {overviewCards.map((card) => (
                    <div className={cn("rounded-lg border border-white/70 p-4", card.color)} key={card.label}>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718071]">{card.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-[#2d2f2c]">{card.value}</p>
                      <p className="mt-1 text-sm text-[#667269]">{card.note}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 xl:grid-cols-2">
                <div className="rounded-lg border border-[#e0e6d8] bg-[#fbfff8] p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-[#2d2f2c]">Tasks / Kanban</h3>
                    <KanbanSquare className="h-4 w-4 text-[#2f9f8f]" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                    {["Backlog", "In progress", "Done"].map((column, index) => (
                      <div className="rounded-lg bg-[#f0f7ec] p-3" key={column}>
                        <p className="mb-2 text-xs font-semibold text-[#6c7b6d]">{column}</p>
                        <div className="rounded-md bg-white px-3 py-2 text-[13px] text-[#59645c] shadow-sm">
                          {todayTasks[index]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-[#e0e6d8] bg-[#fbfff8] p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-[#2d2f2c]">Whiteboard sketch</h3>
                    <PenTool className="h-4 w-4 text-[#3f94d3]" />
                  </div>
                  <div className="relative h-[236px] overflow-hidden rounded-lg bg-[#eef8f3]">
                    <div className="absolute left-5 top-5 rounded-lg bg-white px-4 py-3 text-sm font-medium text-[#56625b] shadow-sm">
                      Launch Map
                    </div>
                    <div className="absolute right-6 top-12 rounded-lg bg-[#dff5ef] px-3 py-2 text-xs font-semibold text-[#3f756c]">
                      Research
                    </div>
                    <div className="absolute bottom-6 left-10 rounded-lg bg-[#f2ecff] px-3 py-2 text-xs font-semibold text-[#7c669f]">
                      AI templates
                    </div>
                    <div className="absolute bottom-10 right-8 rounded-lg bg-[#fff4d8] px-3 py-2 text-xs font-semibold text-[#8d7135]">
                      Tasks
                    </div>
                    <div className="absolute left-[36%] top-[44%] h-16 w-28 rounded-[50%] border-2 border-dashed border-[#e26f5c]/55" />
                  </div>
                </div>
              </section>
            </div>

            <aside className="space-y-4">
              <div className="rounded-lg border border-[#e0e6d8] bg-[#fbfff8] p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#2d2f2c]">Quick notes</h3>
                  <StickyNote className="h-4 w-4 text-[#c9853e]" />
                </div>
                <div className="space-y-3">
                  {["Capture customer questions", "Draft weekly team update", "Turn meeting notes into tasks"].map(
                    (note) => (
                      <div className="rounded-lg bg-[#f0f7ec] p-3 text-[13px] leading-5 text-[#59645c]" key={note}>
                        {note}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-lg border border-[#e0e6d8] bg-[#fbfff8] p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[#2d2f2c]">AI assistant</h3>
                  <MessageSquareText className="h-4 w-4 text-[#8f73d9]" />
                </div>
                <p className="text-[13px] leading-6 text-[#667269]">
                  Summarize a board, turn notes into a checklist, or generate a planning template for the next sprint.
                </p>
                <button className="mt-4 h-9 w-full rounded-lg bg-[#e8f5e3] text-[13px] font-semibold text-[#53685a] hover:bg-[#dcefd6]">
                  Build a template
                </button>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}
