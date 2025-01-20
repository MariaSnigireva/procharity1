import clsx from 'clsx';
import styles from './Footer.scss';
import { Anchor } from '@/components/Anchor/Anchor';
import { Menu } from './Menu';

export interface LinkTo {
	linkTitle: string;
	url: string;
}

export interface Column {
	columnTitle: string;
	links: LinkTo[];
}

export interface Sponsor {
	name: string;
	logo: React.ReactNode;
	url: string;
}

export interface SocialLink {
	icon: React.ReactNode;
	name?: string;
	url: string;
}

export type FooterProps = {
	className?: string;
	columns: Column[];
	copyright?: string;
	sponsors?: Sponsor[];
	socialLinks?: SocialLink[];
};

export function Footer({
    className,
    columns,
    copyright,
    sponsors,
    socialLinks,
  }: FooterProps) {
    return (
      <footer className={clsx(styles.footer, className)} data-testid="Footer">
        <div className={styles.container}>
          <nav className={clsx(styles.sectionColumns, className)}>
            {columns.map((column, index) => (
              <div key={index} className={clsx(styles.column, className)}>
                <span className={clsx(styles.columnTitle, className)}>
                  {column.columnTitle}
                </span>
                <Menu links={column.links} className={clsx(styles.sectionLinks, className)} />
              </div>
            ))}
          </nav>
  
          <div className={clsx(styles.partners, className)}>
					{sponsors && sponsors.length > 0 && (
						<section className={styles.sponsors}>
							{sponsors.map((sponsor) => (
								<Anchor
									key={sponsor.url}
									href={sponsor.url}
									className={styles.sponsorLink}
									aria-label={`Sponsor: ${sponsor.name}`}
								>
									{sponsor.logo}
								</Anchor>
							))}
						</section>
            )}
  
          {socialLinks && socialLinks.length > 0 && (
						<section className={clsx(styles.social, className)}>
							{socialLinks.map((social) => (
								<Anchor
									key={social.url}
									href={social.url}
									className={clsx(styles.socialLink, className)}
									aria-label={`Social link: ${social.name || 'Link'}`}
								>
									{social.icon}
									<span className={clsx(styles.socialText, className)}>
										{social.name}
									</span>
								</Anchor>
							))}
						</section>
            )}
          </div>
  
          {copyright && (
            <div className={clsx(styles.copyright, className)}>
              <p>{copyright}</p>
            </div>
          )}
        </div>
      </footer>
    );
  }
  
  