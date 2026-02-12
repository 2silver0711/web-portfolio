import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import imgRisoTexture from "figma:asset/535520f8f89510a79d271aacc57bbe13d3a57498.png";
import imgNoise from "figma:asset/bcfa0f2ecf6c15828a024b5c1166de4e07f82d98.png";
import imgProblem1 from "figma:asset/2758f95b46a88993bac0230f08a85b16b12d271d.png";
import imgProblem2 from "figma:asset/08f1119dea8b48d68be3b3b857b4a158f73a743e.png";
import imgProblem3 from "figma:asset/d7212125f8c8a730a400f1ca110088dbe42f6996.png";
import imgSolution1 from "figma:asset/04c8e63cd0dda48d7d7cc8df797b9a57ec29ddb3.png";
import imgSolution2 from "figma:asset/4fbb3769100ebd84e592861194d30917a072bd32.png";
import imgSolution3 from "figma:asset/7f488ea77a1ce229a9d11deab95763a3829c9e28.png";
import imgSolution4 from "figma:asset/468529863d15ac5a1e9c762931937912c05e30f4.png";
import imgSolution5 from "figma:asset/387935fb2f6c08090b7d18891f9805f395beed31.png";
import imgSolution6 from "figma:asset/f9b3adcf35deffdc5857e65fa263d9594cb28191.png";
import imgResult from "figma:asset/290819da8763babaec6802a6e63124991937f890.png";
import { ArrowLeft, FileText, ExternalLink, Video, MousePointerClick, Calendar, Eye, Map, Info, List } from 'lucide-react';

function GradientBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="paint0_linear_detail" x1="1920" x2="0" y1="0" y2="1080">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="40%" stopColor="#1a1a1a" />
            <stop offset="70%" stopColor="#2a0a0a" />
            <stop offset="100%" stopColor="#3d1010" />
          </linearGradient>
          <radialGradient id="paint1_radial_detail" cx="70%" cy="30%">
            <stop offset="0%" stopColor="#3d1010" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="paint2_radial_detail" cx="30%" cy="70%">
            <stop offset="0%" stopColor="#8B0000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="1920" height="1080" fill="url(#paint0_linear_detail)" />
        <ellipse cx="1344" cy="300" rx="700" ry="500" fill="url(#paint1_radial_detail)" />
        <ellipse cx="576" cy="800" rx="500" ry="400" fill="url(#paint2_radial_detail)" />
      </svg>
    </div>
  );
}

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="bg-black relative w-full min-h-screen pt-24">
        <GradientBackground />
        <div className="relative z-10 size-full min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-['EB_Garamond:SemiBold',sans-serif] text-5xl text-white mb-6">
              Project Not Found
            </h1>
            <Link 
              to="/projects"
              className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black relative w-full pt-24">
      {/* Background */}
      <GradientBackground />

      {/* Textures */}
      <div className="fixed inset-0 mix-blend-multiply pointer-events-none opacity-60">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url('${imgRisoTexture}')`,
            backgroundSize: '600px 800px',
            backgroundPosition: 'center'
          }} 
        />
      </div>
      <div 
        className="fixed inset-0 mix-blend-overlay opacity-40 pointer-events-none" 
        style={{ 
          backgroundImage: `url('${imgNoise}')`,
          backgroundSize: '240px 240px',
        }} 
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-8 md:px-16 lg:px-20 py-12 pb-24">
        {/* Back Button */}
        <Link 
          to="/projects"
          className="inline-flex items-center gap-3 font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] hover:text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-16 max-w-[1200px]">
          {/* Category Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="inline-block px-6 py-2 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full border border-white/10">
              <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#a0a0a0] tracking-wider uppercase">
                {project.category === 'service' ? 'Service Project' : 
                 project.category === 'renewal' ? 'UX/UI Renewal' : 'UX/UI Project'}
              </span>
            </div>
            {project.category === 'service' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  PM, PD, DEV 팀 프로젝트 (Mobile Web design)
                </span>
              </div>
            )}
            {project.category === 'uxui' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  4인 졸업 전시 프로젝트 (App design)
                </span>
              </div>
            )}
            {project.category === 'renewal' && (
              <div className="inline-block px-6 py-2 bg-[#3d1010]/50 backdrop-blur-sm rounded-full border border-[#8B0000]/30">
                <span className="font-['Suisse_Int\'l:Regular',sans-serif] text-sm text-[#d2a0a0] tracking-wider">
                  개인 프로젝트 (Web design)
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="font-['EB_Garamond:SemiBold',sans-serif] font-semibold text-5xl md:text-6xl text-white mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Period */}
          <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#888] mb-6">
            {project.period}
          </p>

          {/* Description */}
          <p className="font-['Pretendard:Regular',sans-serif] text-xl md:text-2xl text-[#d2d2d2] leading-[1.8] mb-8">
            {project.description}
          </p>

          {/* Meta Info and Action Buttons */}
          <div className="flex flex-wrap gap-8 items-start">
            {/* Meta Info */}
            <div className="flex gap-12 flex-wrap flex-1">
              <div>
                <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-xl text-white mb-2">
                  Role
                </h3>
                <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2]">
                  {project.role}
                </p>
              </div>
              <div>
                <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-xl text-white mb-2">
                  Tools
                </h3>
                <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2]">
                  {project.tools.join(', ')}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {project.designSystemUrl && (
                <a
                  href={project.designSystemUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <FileText size={20} />
                  디자인시스템 보기
                </a>
              )}
              {project.pdfUrl && !project.designSystemUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <FileText size={20} />
                  PDF 보기
                </a>
              )}
              {project.prototypeUrl && (
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-white/90 rounded-full font-['Pretendard:SemiBold',sans-serif] transition-all duration-300 shadow-lg shadow-white/20"
                >
                  <ExternalLink size={20} />
                  프로토타입 보기
                </a>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full font-['Pretendard:SemiBold',sans-serif] text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <Video size={20} />
                  서비스 소개영상
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hero Image - Full Width */}
        <div className="mb-20 rounded-2xl overflow-hidden border border-white/10">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Content Sections */}
        <div className="space-y-20 max-w-[1200px]">
          {/* Overview */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Overview
            </h2>
            <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
              {project.overview}
            </p>
          </section>

          {/* Problem */}
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Problem
            </h2>
            <div className="bg-[#2a2a2a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
                {project.problem}
              </p>
            </div>
          </section>
        </div>

        {/* STOOV 프로젝트 전용 Problem 이미지 - 전체 너비 */}
        {project.id === 'stoov' && (
          <div className="mt-12 space-y-8 mb-20">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgProblem1}
                alt="STOOV Problem 분석 1"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgProblem2}
                alt="STOOV Problem 분석 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgProblem3}
                alt="STOOV Problem 분석 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* 메쎄이상, 로컬링크 Problem 이미지 - 전체 너비 */}
        {project.id !== 'stoov' && project.problemImages && project.problemImages.length > 0 && (
          <div className="mt-12 space-y-8 mb-20">
            {project.problemImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Problem ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 메쎄이상 Solution 이미지 처음 2개 먼저 표시 */}
        {project.id === 'messeisang' && project.solutionImages && project.solutionImages.length > 0 && (
          <div className="mt-12 space-y-8 mb-12">
            {project.solutionImages.slice(0, 2).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Solution ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 로컬링크 Solution 이미지 처음 2개 먼저 표시 */}
        {project.id === 'locallink' && project.solutionImages && project.solutionImages.length > 0 && (
          <div className="mt-12 space-y-8 mb-12">
            {project.solutionImages.slice(0, 2).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Solution ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Solution */}
        <div className="space-y-20 max-w-[1200px]">
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Solution
            </h2>
            
            {/* STOOV 프로젝트 시각화 */}
            {project.id === 'stoov' ? (
              <div className="space-y-8">
                {/* 핵심 솔루션 카드들 */}
                <div className="grid gap-6">
                  {/* 솔루션 1 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Map className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white mb-4">
                          지도 기반 직관적 탐색
                        </h3>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          지도 중심의 직관적인 UI로 장소를 한눈에 파악하고, 위치 기반으로 주변 버스킹 장소를 쉽게 탐색할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 솔루션 2 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Info className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white mb-4">
                          바텀시트 상세 정보
                        </h3>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          마커 클릭 시 바텀시트 팝업으로 장소의 상세 정보를 즉시 확인할 수 있어 별도의 페이지 이동 없이 빠른 정보 습득이 가능합니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 솔루션 3 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <List className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white mb-4">
                          통합된 정보 흐름
                        </h3>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          운영 시간부터 위치 조건, 예약 필요 정보를 한 흐름으로 빠르게 확인할 수 있도록 설계하여 정보 탐색의 효율성을 극대화했습니다.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 솔루션 4 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white mb-4">
                          장소 예약 프로세스 연결
                        </h3>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          예약 사이트 링크를 통해 실제 예약까지 원활하게 진행할 수 있도록 하여 탐색부터 예약 진입의 전체 플로우를 완성했습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : project.id === 'messeisang' ? (
              /* 메쎄이상 프로젝트는 시각화된 카드로 표시 */
              <div className="space-y-8">
                {/* 인트로 텍스트 */}
                <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
                  홈 진입 시 방문자의 '전시 탐색 시작자'로서의 인지 시간을 단축하기 위해, 전시 정보와 회사 정보를 재배치하여 설계했습니다. 핵심 솔루션은 다음과 같습니다.
                </p>
                
                {/* 핵심 솔루션 카드들 */}
                <div className="grid gap-6 mt-12">
                  {/* 솔루션 1 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* 아이콘 영역 */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <MousePointerClick className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* 텍스트 영역 */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-['EB_Garamond:Bold',sans-serif] text-3xl text-white">01</span>
                          <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white">
                            전시 관람과 참가 버튼을 전시 탐색 CTA로 정의
                          </h3>
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          전시 탐색의 공식적인 시작점을 기존 하단 배너가 아닌 상단 Hero 영역 내 '전시 관람 버튼'과 '참가/참관 버튼'으로 전환하여, 가장 먼저 안내하도록 변경.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 솔루션 2 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* 아이콘 영역 */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* 텍스트 영역 */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-['EB_Garamond:Bold',sans-serif] text-3xl text-white">02</span>
                          <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white">
                            전체 일정 버튼 재정의
                          </h3>
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          전체 전시 정보를 확인할 수 있는 '전체 행사일정'을 확인하고 입력한 탐색 흐름의 시작점으로 정의하여 전시 탐색 흐름의 정보 계층을 통합.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 솔루션 3 */}
                  <div className="group bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      {/* 아이콘 영역 */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      
                      {/* 텍스트 영역 */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="font-['EB_Garamond:Bold',sans-serif] text-3xl text-white">03</span>
                          <h3 className="font-['Pretendard:Bold',sans-serif] text-2xl text-white">
                            전시 정보 즉시 노출
                          </h3>
                        </div>
                        <p className="font-['Pretendard:Regular',sans-serif] text-lg text-[#d2d2d2] leading-[1.7]">
                          호버링 시 '전시 제목/날짜/장소'를 바로 인지할 수 있도록 함으로써 메인에서부터 전시 정보를 즉시 확인할 수 있게 함.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* 다른 프로젝트는 기본 텍스트 표시 */
              <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8] mb-12">
                {project.solution}
              </p>
            )}
          </section>
        </div>

        {/* STOOV Solution 이미지 - 전체 너비 */}
        {project.id === 'stoov' && (
          <div className="mt-12 space-y-8 mb-20">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution1}
                alt="STOOV Solution 핵심 솔루션"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution2}
                alt="STOOV Solution 타겟 정의"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution3}
                alt="STOOV Solution 페르소나 & 유저 저니맵"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution4}
                alt="STOOV Solution 장소 목록 조회"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution5}
                alt="STOOV Solution 장소 검색"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src={imgSolution6}
                alt="STOOV Solution 장소 상세 보기"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* 메쎄이상, 로컬링크 Solution 이미지 - 전체 너비 */}
        {project.id !== 'stoov' && project.id !== 'messeisang' && project.id !== 'locallink' && project.solutionImages && project.solutionImages.length > 0 && (
          <div className="mt-12 space-y-8 mb-20">
            {project.solutionImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Solution ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 메쎄이상 Solution 나머지 이미지 (3번째, 4번째) */}
        {project.id === 'messeisang' && project.solutionImages && project.solutionImages.length > 2 && (
          <div className="mt-12 space-y-8 mb-20">
            {project.solutionImages.slice(2).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Solution ${idx + 3}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 로컬링크 Solution 나머지 이미지 (3번째부터) */}
        {project.id === 'locallink' && project.solutionImages && project.solutionImages.length > 2 && (
          <div className="mt-12 space-y-8 mb-20">
            {project.solutionImages.slice(2).map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Solution ${idx + 3}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* 메쎄이상, 로컬링크 Result 이미지 먼저 표시 - 전체 너비 */}
        {project.id !== 'stoov' && project.resultImages && project.resultImages.length > 0 && (
          <div className="mt-20 space-y-8 mb-12">
            {project.resultImages.map((img, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={img}
                  alt={`${project.title} Result ${idx + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Result */}
        <div className="space-y-20 max-w-[1200px]">
          <section className="mb-20">
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-4xl text-white mb-8">
              Result
            </h2>
            <div className="bg-gradient-to-br from-[#2a2a2a]/70 to-[#1a1a1a]/70 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="font-['Pretendard:Regular',sans-serif] text-xl text-[#d2d2d2] leading-[1.8]">
                {project.result}
              </p>
            </div>
          </section>
        </div>

        {/* STOOV Result 이미지 - 전체 너비 */}
        {project.id === 'stoov' && (
          <div className="mt-12 mb-20 rounded-2xl overflow-hidden border border-white/10">
            <img
              src={imgResult}
              alt="STOOV Result - Usability Test"
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Tags */}
        <div className="space-y-20 max-w-[1200px]">
          <section>
            <h2 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl text-white mb-6">
              Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-5 py-2 bg-[#2a2a2a]/50 backdrop-blur-sm rounded-full font-['Pretendard:Regular',sans-serif] text-base text-[#d2d2d2] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* Navigation to other projects */}
        <div className="mt-24 pt-12 border-t border-white/10 max-w-[1200px]">
          <h3 className="font-['EB_Garamond:SemiBold_Italic',sans-serif] font-semibold italic text-3xl text-white mb-8">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/projects/${otherProject.id}`}
                  className="group relative overflow-hidden rounded-xl bg-[#2a2a2a]/50 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-white/30"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={otherProject.thumbnail}
                      alt={otherProject.title}
                      className="size-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-['Pretendard:SemiBold',sans-serif] text-lg text-white mb-1">
                      {otherProject.title}
                    </h4>
                    <p className="font-['Pretendard:Regular',sans-serif] text-sm text-[#888]">
                      {otherProject.period}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}