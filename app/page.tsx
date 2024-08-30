// components
import Button from "@/components/core/Button";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col gap-10">
        <span className="font-bold text-2xl">쓸데없는 토론하기</span>
        <span className="font-bold">실시간으로 채팅에 참여해보세요. 주제는 아무거나 상관 없습니다</span>
        <Button text={"채팅방 둘러보기"} />
    </main>
  );
}
