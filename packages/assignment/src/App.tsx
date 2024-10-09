import React, { useState } from "react";
import { generateItems } from "./utils";
import Layout from "./component/Layout";
import NotificationSystem from "./component/NotificationSystem";
import ComplexForm from "./component/ComplexForm";
import ThemeProvider from "./provider/theme/ThemeProvider";
import NotificationProvider from "./provider/notification/NotificationProvider";
import AuthProvider from "./provider/auth/AuthProvider";
import Header from "./component/Header";
import ItemList from "./component/ItemList";

// 메인 App 컴포넌트
const App: React.FC = () => {
  const [items] = useState(generateItems(10000));
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <Layout>
            <Header />
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-4">
                  <ItemList items={items} />
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                  <ComplexForm />
                </div>
              </div>
            </div>
            <NotificationSystem />
          </Layout>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export default App;
