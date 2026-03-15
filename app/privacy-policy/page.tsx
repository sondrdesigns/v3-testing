import { Container } from "@/components/ui/Container"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white text-black pt-40 pb-32">
            <Container className="max-w-4xl mx-auto flex flex-col gap-12">
                <div className="border-b border-black pb-8">
                    <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter uppercase mb-4">Privacy Policy</h1>
                    <p className="font-subhead uppercase tracking-widest text-sm font-bold text-brand-accent">Last Updated: March 2026</p>
                </div>

                <div className="font-body text-lg leading-relaxed flex flex-col gap-8">
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold font-subhead uppercase tracking-widest">1. Introduction</h2>
                        <p>Welcome to Sondr Designs. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold font-subhead uppercase tracking-widest">2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                        <ul className="list-disc pl-6 flex flex-col gap-2">
                            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                        </ul>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold font-subhead uppercase tracking-widest">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you.</p>
                    </section>

                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold font-subhead uppercase tracking-widest">4. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:studio@sondrdesigns.com" className="text-brand-accent hover:underline">studio@sondrdesigns.com</a>.</p>
                    </section>
                </div>
            </Container>
        </div>
    )
}
