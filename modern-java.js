// Create neural network SVG elements
function createNeuralNetwork() {
    const svg = document.querySelector('.neural-svg');
    if (!svg) return;
    
    // Clear existing content
    svg.innerHTML = '';
    
    const numNodes = 20;
    const numLayers = 4;
    const width = 800;
    const height = 600;
    const nodeRadius = 5;
    
    const nodes = [];
    
    // Create nodes in layers
    for (let layer = 0; layer < numLayers; layer++) {
        const nodesInThisLayer = [];
        const nodesCount = layer === 0 || layer === numLayers - 1 ? 6 : 10;
        
        for (let i = 0; i < nodesCount; i++) {
            const x = 100 + (width - 200) * (layer / (numLayers - 1));
            const y = 100 + (height - 200) * (i / (nodesCount - 1));
            
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', nodeRadius);
            circle.setAttribute('fill', 'rgba(96, 165, 250, 0.6)');
            
            svg.appendChild(circle);
            nodesInThisLayer.push({x, y});
        }
        
        nodes.push(nodesInThisLayer);
    }
    
    // Connect nodes between layers
    for (let layer = 0; layer < numLayers - 1; layer++) {
        for (const sourceNode of nodes[layer]) {
            for (const targetNode of nodes[layer + 1]) {
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', sourceNode.x);
                line.setAttribute('y1', sourceNode.y);
                line.setAttribute('x2', targetNode.x);
                line.setAttribute('y2', targetNode.y);
                line.setAttribute('stroke', 'rgba(96, 165, 250, 0.2)');
                line.setAttribute('stroke-width', '0.5');
                
                svg.appendChild(line);
            }
        }
    }
}

// Call this function after the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code
    
    // Add neural network
    createNeuralNetwork();
});