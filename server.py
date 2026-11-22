import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run():
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        url = f"http://localhost:{PORT}/index.html"
        print(f"=======================================================")
        print(f"🛒 కిరాణా చిట్టా - Telugu Groceries Web App")
        print(f"🚀 Server running at: {url}")
        print(f"📂 Folder: {DIRECTORY}")
        print(f"Press Ctrl+C to stop the server")
        print(f"=======================================================")
        
        # Try to open the browser automatically
        try:
            webbrowser.open(url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            sys.exit(0)

if __name__ == '__main__':
    run()
