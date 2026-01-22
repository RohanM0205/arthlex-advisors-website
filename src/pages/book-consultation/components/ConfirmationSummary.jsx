// import React from 'react';
// import Icon from '../../../components/AppIcon';
// import Button from '../../../components/ui/Button';

// const ConfirmationSummary = ({ consultationData, onEdit, onConfirm, isSubmitting }) => {
//   const {
//     serviceCategory,
//     service,
//     selectedDate,
//     formData
//   } = consultationData;

//   return (
//     <div className="space-y-8">

//       <div className="bg-card border rounded-lg p-6 space-y-6">

//         <div className="flex justify-between items-center">
//           <h3 className="text-xl font-semibold">Consultation Summary</h3>
//           <Button variant="ghost" size="sm" onClick={onEdit} iconName="Edit2">
//             Edit
//           </Button>
//         </div>

//         {/* SERVICE INFO */}
//         <SummaryItem
//           icon="Layers"
//           label="Service Category"
//           value={serviceCategory}
//         />

//         <SummaryItem
//           icon="Tag"
//           label="Selected Service"
//           value={service}
//         />

//         <SummaryItem
//           icon="Calendar"
//           label="Preferred Date"
//           value={selectedDate}
//         />

//         {/* CONTACT INFO */}
//         <SummaryItem
//           icon="User"
//           label="Client"
//           value={formData.fullName}
//           subValue={`${formData.email} • ${formData.phone}`}
//         />

//         {formData.companyName && (
//           <SummaryItem
//             icon="Building2"
//             label="Company"
//             value={formData.companyName}
//           />
//         )}

//         <SummaryItem
//           icon="MessageSquare"
//           label="Consultation Topic"
//           value={formData.topic}
//         />
//       </div>

//       <Button
//         size="lg"
//         fullWidth
//         onClick={onConfirm}
//         disabled={isSubmitting}
//         iconName="CheckCircle"
//         iconPosition="left"
//         className="btn-conversion"
//       >
//         {isSubmitting ? 'Confirming...' : 'Confirm Consultation'}
//       </Button>
//     </div>
//   );
// };

// const SummaryItem = ({ icon, label, value, subValue }) => (
//   <div className="flex gap-4">
//     <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
//       <Icon name={icon} size={20} className="text-primary" />
//     </div>
//     <div>
//       <p className="text-sm text-muted-foreground">{label}</p>
//       <p className="font-medium">{value || '-'}</p>
//       {subValue && <p className="text-sm text-muted-foreground">{subValue}</p>}
//     </div>
//   </div>
// );

// export default ConfirmationSummary;



import React, { useMemo } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ConfirmationSummary = ({
  consultationData,
  onEdit,
  onConfirm,
  isSubmitting
}) => {
  /* ================= SAFE DATA ================= */
  const {
    serviceCategory = '—',
    service = '—',
    selectedDate,
    formData = {}
  } = consultationData || {};

  const {
    fullName = '—',
    email = '—',
    phone = '—',
    companyName,
    topic = '—'
  } = formData;

  /* ================= HELPERS ================= */
  const formattedDate = useMemo(() => {
    if (!selectedDate) return '—';
    try {
      const date = new Date(selectedDate);
      return date.toLocaleDateString('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return selectedDate;
    }
  }, [selectedDate]);

  const handleConfirmClick = () => {
    if (isSubmitting) return;
    onConfirm?.();
  };

  /* ================= UI ================= */
  return (
    <div className="space-y-8">
      <div className="bg-card border rounded-lg p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">
            Consultation Summary
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onEdit}
            iconName="Edit2"
          >
            Edit
          </Button>
        </div>

        {/* SERVICE INFO */}
        <SummaryItem
          icon="Layers"
          label="Service Category"
          value={serviceCategory}
        />

        <SummaryItem
          icon="Tag"
          label="Selected Service"
          value={service}
        />

        <SummaryItem
          icon="Calendar"
          label="Preferred Date"
          value={formattedDate}
        />

        {/* CONTACT INFO */}
        <SummaryItem
          icon="User"
          label="Client"
          value={fullName}
          subValue={`${email} • ${phone}`}
        />

        {companyName && (
          <SummaryItem
            icon="Building2"
            label="Company"
            value={companyName}
          />
        )}

        <SummaryItem
          icon="MessageSquare"
          label="Consultation Topic"
          value={topic}
        />
      </div>

      {/* CONFIRM BUTTON */}
      <Button
        size="lg"
        fullWidth
        onClick={handleConfirmClick}
        disabled={isSubmitting}
        iconName="CheckCircle"
        iconPosition="left"
        className="btn-conversion"
      >
        {isSubmitting ? 'Confirming...' : 'Confirm Consultation'}
      </Button>
    </div>
  );
};

/* ================= REUSABLE ROW ================= */
const SummaryItem = ({ icon, label, value, subValue }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
      <Icon name={icon} size={20} className="text-primary" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">
        {label}
      </p>
      <p className="font-medium text-foreground">
        {value || '—'}
      </p>
      {subValue && (
        <p className="text-sm text-muted-foreground">
          {subValue}
        </p>
      )}
    </div>
  </div>
);

export default ConfirmationSummary;
