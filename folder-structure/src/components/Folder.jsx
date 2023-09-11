import { useState } from "react";

const Folder = ({ item }) => {
  const [isExpand, setIsExpand] = useState(false);
  
  return (
    <div>
      {item.isFolder ? (
        <div>
          <div onClick={() => setIsExpand(!isExpand)}>
            <span className="folder"> 📂 {item.name}</span>
          </div>
          <div
            className="children"
            style={{ display: isExpand ? "block" : "none" }}
          >
            {item.children.map((item) => (
              <Folder item={item} key={item.name}/>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <span className="file"> 📄{item.name}</span>
        </div>
      )}
    </div>
  );
};

export default Folder;
