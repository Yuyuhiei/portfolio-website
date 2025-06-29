'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Full Stack?\nLow Code?\nNo Code?'
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const handleSendEmail = () => {
    window.location.href = 'mailto:lauvigne.lumeda@example.com'
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Personal Information */}
          <div className="space-y-6 animate-fade-in order-2 lg:order-1">
            {/* Profile Image Container */}
            <div className="relative p-6 sm:p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-lg hover:bg-background/70 max-w-md mx-auto lg:mx-0">
              {/* Corner borders */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 rounded-tr-2xl border-muted-foreground/30" />
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 rounded-bl-2xl border-muted-foreground/30" />
              
              {/* Profile Image with Verified Badge */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4">
                <img
                  src="/photos/tiltedcard.svg"
                  alt="Lauvigne G. Lumeda"
                  className="w-full h-full rounded-full object-cover border-2 border-border"
                />
                <div className="absolute -top-1 -right-1 bg-none rounded-full p-1">
                  <Image
                    src="/verified-badge.svg"
                    alt="Verified Icon"
                    width={24}
                    height={24}
                    className="h-4 w-4 sm:h-6 sm:w-6 filter dark:invert-0 invert"
                  />
                </div>
              </div>

              <div className="text-center space-y-3">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-foreground">
                  Lauvigne G. Lumeda
                </h1>
                
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="text-sm sm:text-base font-inconsolata">Manila, Philippines</span>
                </div>
                
                <p className="text-sm sm:text-base text-muted-foreground font-inconsolata font-medium">
                  Aspiring Full Stack Developer and Solopreneur
                </p>
                
                <Button 
                  onClick={handleSendEmail}
                  className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-inconsolata font-medium w-full sm:w-auto transition-all duration-300 hover:scale-105 interactive-element"
                >
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </div>
          </div>

          {/* Right side - Animated Text and Description */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up order-1 lg:order-2 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-foreground whitespace-pre-line">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl md:text-3xl font-playfair text-muted-foreground font-bold italic mb-6 sm:mb-8">
                I got you
              </p>
            </div>
            
            <div className="max-w-xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-inconsolata">
                Transforming ideas into digital experiences through code, creativity, and innovation. 
                From full-stack development to no-code solutions, I bridge the gap between 
                imagination and reality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}