// package com.hireon.hireon.security;

// import jakarta.servlet.FilterChain;
// import jakarta.servlet.ServletException;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.stereotype.Component;
// import org.springframework.web.filter.OncePerRequestFilter;

// import java.io.IOException;
// import java.util.Collections;

// @Component
// public class JwtFilter extends OncePerRequestFilter {

//     @Autowired
//     private JwtUtil jwtUtil;

//     // @Override
//     // protected void doFilterInternal(
//     //         HttpServletRequest request,
//     //         HttpServletResponse response,
//     //         FilterChain filterChain
//     // ) throws ServletException, IOException {

//     //     final String authHeader = request.getHeader("Authorization");

//     //     String email = null;
//     //     String token = null;

//     //     if (authHeader != null && authHeader.startsWith("Bearer ")) {
//     //         token = authHeader.substring(7);
//     //         if (jwtUtil.validateToken(token)) {
//     //             email = jwtUtil.extractEmail(token);
//     //         }
//     //     }

//     //     if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

//     //         UsernamePasswordAuthenticationToken authToken =
//     //                 new UsernamePasswordAuthenticationToken(email, null, Collections.emptyList());

//     //         authToken.setDetails(
//     //                 new WebAuthenticationDetailsSource().buildDetails(request)
//     //         );

//     //         SecurityContextHolder.getContext().setAuthentication(authToken);
//     //     }

//     //     filterChain.doFilter(request, response);
//     // }
//     @Override
// protected void doFilterInternal(
//         HttpServletRequest request,
//         HttpServletResponse response,
//         FilterChain filterChain
// ) throws ServletException, IOException {

//     String path = request.getServletPath();

//     // ✅ Skip JWT for public endpoints
//     if (path.startsWith("/api/auth") ||
//         path.startsWith("/api/users") ||
//         path.startsWith("/api/jobs") ||
//         path.startsWith("/api/applications")) {

//         filterChain.doFilter(request, response);
//         return;
//     }

//     final String authHeader = request.getHeader("Authorization");

//     String email = null;
//     String token = null;

//     if (authHeader != null && authHeader.startsWith("Bearer ")) {
//         token = authHeader.substring(7);

//         if (jwtUtil.validateToken(token)) {
//             email = jwtUtil.extractEmail(token);
//         }
//     }

//     if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

//         UsernamePasswordAuthenticationToken authToken =
//                 new UsernamePasswordAuthenticationToken(email, null, Collections.emptyList());

//         authToken.setDetails(
//                 new WebAuthenticationDetailsSource().buildDetails(request)
//         );

//         SecurityContextHolder.getContext().setAuthentication(authToken);
//     }

//     filterChain.doFilter(request, response);
// }
// }


package com.hireon.hireon.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");

        String email = null;
        String token = null;

        // ✅ Extract token
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7);

            if (jwtUtil.validateToken(token)) {
                email = jwtUtil.extractEmail(token);
            }
        }

        // ✅ Set authentication
        if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UsernamePasswordAuthenticationToken authToken =
                    new UsernamePasswordAuthenticationToken(email, null, Collections.emptyList());

            authToken.setDetails(
                    new WebAuthenticationDetailsSource().buildDetails(request)
            );

            SecurityContextHolder.getContext().setAuthentication(authToken);
        }

        filterChain.doFilter(request, response);
    }
}