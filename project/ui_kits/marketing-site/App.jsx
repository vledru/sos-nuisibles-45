// App.jsx — top-level router for the click-thru prototype

function App() {
  const [page, setPage] = React.useState("home");

  function navigate(to) {
    setPage(to);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  let body;
  switch (page) {
    case "home":             body = <HomePage navigate={navigate} />; break;
    case "deratisation":     body = <ServicePage slug="deratisation"     navigate={navigate} />; break;
    case "desinsectisation": body = <ServicePage slug="desinsectisation" navigate={navigate} />; break;
    case "punaises":         body = <ServicePage slug="punaises"         navigate={navigate} />; break;
    case "contact":          body = <ContactPage navigate={navigate} />; break;
    default:                 body = <HomePage navigate={navigate} />;
  }

  return (
    <>
      <EmergencyBar />
      <Header currentPage={page} onNavigate={navigate} />
      <main>{body}</main>
      <Footer onNavigate={navigate} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
