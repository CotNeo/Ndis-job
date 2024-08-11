const content = {
    turkish: `
        <h2 class="text-center">Özgeçmiş</h2>
        <h3>İsim: Furkan Akar</h3>
        <p><strong>Telefon:</strong> 05358417522</p>
        <p><strong>E-posta:</strong> furkanaliakar@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/CotNeo/mms_project" target="_blank">GitHub Profilim</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/furkan-akar-7a176618a/" target="_blank">LinkedIn Profilim</a></p>

        <h4>Profesyonel Özet</h4>
        <p>İstanbul Üniversitesi'nde Bilgisayar Programcılığı okuyan, güçlü bir Frontend Developer yetenek setine sahip,
            deneyimli bir yazılım geliştiricisiyim. MNG Kargo'da CCTV Admin olarak görev yaparken farklı teknolojilerle çalıştım ve zorlu problemleri çözme becerilerimi geliştirdim. Orta seviye bir calisthenics atletiyim ve spor ile akademik hayatımı düzenli bir şekilde yürütebileceğim bir iş arıyorum. Yapay zekanın yükselmesiyle birlikte kodlamanın erişilebilirliği arttığından, büyük projelerde yer almak ve CI/CD, Cloud, Docker gibi entegrasyon sistemlerini öğrenerek DevOps tecrübesi kazanmak istiyorum. İngilizce seviyem B2 düzeyindedir ve teknik dökümantasyon okumakta zorlanmıyorum.</p>

        <h4>Eğitim</h4>
        <p><strong>İstanbul Üniversitesi, Bilgisayar Programcılığı</strong> <br> [2023] - [2025]
            [Devam Ediyor]</p>

        <h4>İş Deneyimi</h4>
        <p><strong>CCTV Admin - Güvenlik Departmanı, MNG Kargo</strong> <br> [2023] - [Halen Devam Ediyor]</p>
        <ul>
            <li>Kullanıcılardan gelen talepleri değerlendirdim ve gerekli yetkilendirmeleri sağladım.</li>
            <li>Kayıt cihazlarının kontrollerini gerçekleştirdim ve değişen IP adres bilgilerini güncelledim.</li>
            <li>Export edilen görüntüleri ilgili kişilerle Cloud üzerinden paylaştım.</li>
        </ul>

        <h4>Projeler</h4>
        <p><strong>CCTV Viewer Projesi</strong> <br> GitHub: <a href="https://github.com/CotNeo/cctv-viewer" target="_blank">CCTV Viewer Proje Linki</a></p>
        <ul>
            <li>Proje Amacı: Şirket içerisinde .avi uzantılı dosyaların yönetimi ve kullanıcılar tarafından erişimi konusunda yaşanan sorunları çözmek amacıyla geliştirilmiştir...</li>
        </ul>

        <h4>Kişisel Beceriler</h4>
        <ul>
            <li>Problemleri çözme ve analitik düşünme yeteneği</li>
            <li>Takım çalışmasına yatkınlık ve güçlü iletişim becerileri</li>
            <li>Zaman yönetimi ve iş önceliklendirme becerisi</li>
        </ul>

        <h4>İlgi Alanları</h4>
        <ul>
            <li>Calisthenics</li>
            <li>DevOps</li>
        </ul>
    `,
    english: `
        <h2 class="text-center">Curriculum Vitae</h2>
        <h3>Name: Furkan Akar</h3>
        <p><strong>Phone:</strong> 05358417522</p>
        <p><strong>Email:</strong> furkanaliakar@gmail.com</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/CotNeo/mms_project" target="_blank">My GitHub Profile</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/furkan-akar-7a176618a/" target="_blank">My LinkedIn Profile</a></p>

        <h4>Professional Summary</h4>
        <p>I am a software developer with strong Frontend Developer skills, currently studying Computer Programming at
            Istanbul University. While working as a CCTV Admin at MNG Cargo, I gained experience with various technologies and developed problem-solving skills. I am an intermediate-level calisthenics athlete looking for a job where I can balance my athletic and academic pursuits. With the rise of AI making coding more accessible, I am eager to work on large projects and gain DevOps experience by learning integration systems such as CI/CD, Cloud, and Docker. My English level is B2, and I have no difficulty reading technical documentation.</p>

        <h4>Education</h4>
        <p><strong>Istanbul University, Computer Programming</strong> <br> [2023] - [2025]
        [Continued]</p>

        <h4>Work Experience</h4>
        <p><strong>CCTV Admin - Security Department, MNG Cargo</strong> <br> [2023]] - [Currently Employed]</p>
        <ul>
            <li>Evaluated user requests and provided necessary authorizations.</li>
            <li>Monitored recording devices and updated IP address information as needed.</li>
            <li>Shared exported footage with relevant parties via cloud services.</li>
        </ul>

        <h4>Projects</h4>
        <p><strong>CCTV Viewer Project</strong> <br> GitHub: <a href="https://github.com/CotNeo/cctv-viewer" target="_blank">CCTV Viewer Project Link</a></p>
        <ul>
            <li>Project Purpose: Developed to solve issues regarding the management and access of .avi files within the company, ensuring a seamless experience for users...</li>
        </ul>

        <h4>Personal Skills</h4>
        <ul>
            <li>Problem-solving and analytical thinking ability</li>
            <li>Teamwork and strong communication skills</li>
            <li>Time management and task prioritization skills</li>
        </ul>

        <h4>Interests</h4>
        <ul>
            <li>Calisthenics</li>
            <li>DevOps</li>
        </ul>
    `
};

function switchLanguage(language) {
    document.getElementById('content').innerHTML = content[language];
}

// Default content
switchLanguage('turkish');
