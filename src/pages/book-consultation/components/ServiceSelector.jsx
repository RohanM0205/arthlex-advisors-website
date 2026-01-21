// import Icon from "../../../components/AppIcon";

// const ServiceSelector = ({
//   categories,
//   selectedCategory,
//   selectedService,
//   onCategorySelect,
//   onServiceSelect
// }) => {
//   return (
//     <div className="space-y-8">

//       {/* CATEGORY CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {categories.map((cat) => {
//           const isActive = selectedCategory?.id === cat.id;

//           return (
//             <div
//               key={cat.id}
//               onClick={() => {
//                 onCategorySelect(cat);
//                 onServiceSelect('');
//               }}
//               className={`
//                 cursor-pointer rounded-xl p-6 text-center border
//                 transition-all duration-300
//                 ${isActive
//                   ? 'border-primary bg-primary/5 shadow-md'
//                   : 'border-border hover:border-primary/50 hover:shadow-lg'}
//               `}
//             >
//               <div
//                 className={`
//                   w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center
//                   transition
//                   ${isActive ? 'bg-primary text-white' : 'bg-primary/10 text-primary'}
//                 `}
//               >
//                 <Icon name={cat.icon} size={22} />
//               </div>

//               <h3 className="font-semibold text-sm md:text-base">
//                 {cat.title}
//               </h3>
//             </div>
//           );
//         })}
//       </div>

//       {/* SUB SERVICES */}
//       {selectedCategory && (
//         <div className="bg-muted/40 rounded-xl p-6">
//           <h4 className="font-semibold mb-4 text-sm">
//             Select a service under <span className="text-primary">{selectedCategory.title}</span>
//           </h4>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             {selectedCategory.services.map((service) => {
//               const isSelected = selectedService === service;

//               return (
//                 <div
//                   key={service}
//                   onClick={() => onServiceSelect(service)}
//                   className={`
//                     flex items-center gap-2 p-3 rounded-lg cursor-pointer border
//                     transition-all
//                     ${isSelected
//                       ? 'border-primary bg-primary/10'
//                       : 'border-border hover:border-primary/40'}
//                   `}
//                 >
//                   <Icon
//                     name="Check"
//                     size={14}
//                     className={isSelected ? 'text-primary' : 'text-muted-foreground'}
//                   />
//                   <span className="text-sm">{service}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ServiceSelector;



import Icon from "../../../components/AppIcon";

const ServiceSelector = ({
  categories,
  selectedCategory,
  selectedService,
  onCategorySelect,
  onServiceSelect
}) => {
  const handleOtherSelect = () => {
    onServiceSelect("Other");
  };

  return (
    <div className="space-y-10">

      {/* ================= CATEGORY CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const isActive = selectedCategory?.id === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => {
                onCategorySelect(cat);
                onServiceSelect("");
              }}
              className={`
                cursor-pointer rounded-xl p-6 text-center border
                transition-all duration-300
                ${isActive
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/50 hover:shadow-lg"}
              `}
            >
              <div
                className={`
                  w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center
                  transition
                  ${isActive
                    ? "bg-primary text-white"
                    : "bg-primary/10 text-primary"}
                `}
              >
                <Icon name={cat.icon} size={22} />
              </div>

              <h3 className="font-semibold text-sm md:text-base">
                {cat.title}
              </h3>
            </div>
          );
        })}
      </div>

      {/* ================= SUB SERVICES ================= */}
      {selectedCategory && (
        <div className="bg-muted/40 rounded-xl p-6 space-y-5">

          <h4 className="font-semibold text-sm">
            Select a service under{" "}
            <span className="text-primary">{selectedCategory.title}</span>
          </h4>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {selectedCategory.services.map((service) => {
              const isSelected = selectedService === service;

              return (
                <div
                  key={service}
                  onClick={() => onServiceSelect(service)}
                  className={`
                    flex items-center gap-2 p-3 rounded-lg cursor-pointer border
                    transition-all
                    ${isSelected
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/40"}
                  `}
                >
                  <Icon
                    name="Check"
                    size={14}
                    className={isSelected ? "text-primary" : "text-muted-foreground"}
                  />
                  <span className="text-sm">{service}</span>
                </div>
              );
            })}
          </div>

          {/* ================= OTHER OPTION (SEPARATE) ================= */}
          <div className="pt-4 border-t border-border">
            <div
              onClick={handleOtherSelect}
              className={`
                flex items-center justify-center gap-2 p-3 rounded-lg cursor-pointer
                border border-dashed transition-all
                ${selectedService === "Other"
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"}
              `}
            >
              <Icon
                name="MoreHorizontal"
                size={16}
                className="text-muted-foreground"
              />
              <span className="text-sm font-medium">
                Other (Not listed above)
              </span>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default ServiceSelector;
