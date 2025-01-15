import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  description: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  description,
  email,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <h1>Email, {email}</h1>
    <h1>description, {description}</h1>
  </div>
);
