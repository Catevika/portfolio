const SidebarButton = ({ toggleSidebar, isOpen }) => {
	return (
		<div className='sidebar-button-container'>
			<div
				className={isOpen ? 'sidebar-button open' : 'sidebar-button'}
				onClick={toggleSidebar}
			>
				<div className='sidebar-button-lines'></div>
			</div>
		</div>
	);
};

export default SidebarButton;
