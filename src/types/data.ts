export interface SubMenuItem {
  title: string;
  url: string;
}

export interface MenuItem {
  title: string;
  url: string;
  submenu?: SubMenuItem[];
}

export interface Settings {
  primary_color: string;
  logo: string;
  logo_light: string;
  enable_preloader: boolean;
  preloader_text: string;
  preloader_intro: string;
  preloader_hover_first: string;
  preloader_hover_second: string;
  enable_magic_cursor: boolean;
  menu_btn_caption: string;
  back_to_top_caption: string;
  footer_copyright: string;
}

export interface ProjectImage {
  src: string;
  title?: string;
  caption?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  title_spaces?: string;
  subtitle: string;
  year: string;
  category_display: string;
  categories: string[];
  services?: string[];
  visit_link?: string;
  visit_link_text?: string;
  has_video: boolean;
  video_mp4?: string;
  video_webm?: string;
  image: string;
  background_color: string;
  navigation_color: string;
  thumbnail_size: "medium" | "large";
  overview?: string;
  description?: string;
  content?: string; // HTML контент для простых проектов
  images?: ProjectImage[];
  final_section?: {
    title: string;
    images: ProjectImage[];
  };
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  categories: string[];
  image?: string;
  content: string;
}

export interface PortfolioData {
  portfolio: PortfolioItem[];
  blog: BlogItem[];
  menu: MenuItem[];
  settings: Settings;
}