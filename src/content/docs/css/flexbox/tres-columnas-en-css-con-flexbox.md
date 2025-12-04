---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMBAGCS5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDi%2FGNc7xeac%2ByVnOy0i5jd0PHYNIW73Y4fqWvzXXlN1QIgGwH%2FLrgjubfS1Os3bXNTKnG4Fq01a8Z7AeztqIgslz0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAFBTsqM7Xy3oROuDircA1nlbMfhanZcB0qq9zk%2FnUnQJXy9Feknye8x0bR35Ok4pfvn5nCrT%2FhU6l0n7Lp0qvm62Xkpd1GcwbqK9qEwMLFjdtDe6EbanYLYvnG%2BQOGTR3n0CzhFnpvcDDYJva1l1csaHocDeDVsCk7bD1EzGLBEst7O7pb8iK8UZ%2B7FoWx%2FJMZIHdWj%2F4X0TJZhIQ%2FBYdlMQU1Js7N6JqanPdW%2B5eQ%2FFe5CkjGk3uX4uKrBiwRbV3GT8FCETTamyT2oVaILYDLb5xT03LiFCckjMubl7K5XYFq5MVU3269OLIBRuTJGuF2mRsyHW4J0ZsckDVHA0uJQxq%2B7sEdvVcE0ptiOUHl7JgH7XGwg9vqt9qu0PcYrYAJf8ji%2BcuADb0kOasw4OOymAOayMYZaIF9P6ZoVAQllCKslDCcVFThmHd5tVoAuNqXs7jxED5cAaht3TYRbcT%2F4gx79pDv1pT7ew0vgJKEPid9Wj6pUlcx2Dy3cDWllhfv2IGxSWLtTlU3OzGZ%2FXPlJHSrHNYLGwpKDWri681rOsIqUEhZVZWcyHHQWyPiLBf%2FFt9qJKnPCAFHF%2FydfVrOjX%2F21K9vsaWKKOaBqQsp6Acd3%2F%2BVbL8LR%2B3dg3EX2RNfroAASdOFRzCmqMLitxMkGOqUBB3L0JdtPwWIZ1R7ydlKC%2BBNh9rWZgMS6LrYmio0TacAeZ9oGAr3R%2FrlSYcL3kwicp2g5ih3JIk%2BtNl0WYxrinoWLsjmTReuMUKfflrQlkJDOR7a3IJEsG%2BMWe%2BwU7Hpso0j4RokyxDvYN2dBCyBySnahLQQmzLH6QgEmLqytb6zmSnNxcWQ1vR8j83ajR%2FMO6a2aPcJZnuXR4UQItBnD%2BRe29U5q&X-Amz-Signature=c24cfdf7cb298551aa8cceccd5bca8faf47b0db68642f085e0cd454675bb2941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMBAGCS5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDi%2FGNc7xeac%2ByVnOy0i5jd0PHYNIW73Y4fqWvzXXlN1QIgGwH%2FLrgjubfS1Os3bXNTKnG4Fq01a8Z7AeztqIgslz0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDAFBTsqM7Xy3oROuDircA1nlbMfhanZcB0qq9zk%2FnUnQJXy9Feknye8x0bR35Ok4pfvn5nCrT%2FhU6l0n7Lp0qvm62Xkpd1GcwbqK9qEwMLFjdtDe6EbanYLYvnG%2BQOGTR3n0CzhFnpvcDDYJva1l1csaHocDeDVsCk7bD1EzGLBEst7O7pb8iK8UZ%2B7FoWx%2FJMZIHdWj%2F4X0TJZhIQ%2FBYdlMQU1Js7N6JqanPdW%2B5eQ%2FFe5CkjGk3uX4uKrBiwRbV3GT8FCETTamyT2oVaILYDLb5xT03LiFCckjMubl7K5XYFq5MVU3269OLIBRuTJGuF2mRsyHW4J0ZsckDVHA0uJQxq%2B7sEdvVcE0ptiOUHl7JgH7XGwg9vqt9qu0PcYrYAJf8ji%2BcuADb0kOasw4OOymAOayMYZaIF9P6ZoVAQllCKslDCcVFThmHd5tVoAuNqXs7jxED5cAaht3TYRbcT%2F4gx79pDv1pT7ew0vgJKEPid9Wj6pUlcx2Dy3cDWllhfv2IGxSWLtTlU3OzGZ%2FXPlJHSrHNYLGwpKDWri681rOsIqUEhZVZWcyHHQWyPiLBf%2FFt9qJKnPCAFHF%2FydfVrOjX%2F21K9vsaWKKOaBqQsp6Acd3%2F%2BVbL8LR%2B3dg3EX2RNfroAASdOFRzCmqMLitxMkGOqUBB3L0JdtPwWIZ1R7ydlKC%2BBNh9rWZgMS6LrYmio0TacAeZ9oGAr3R%2FrlSYcL3kwicp2g5ih3JIk%2BtNl0WYxrinoWLsjmTReuMUKfflrQlkJDOR7a3IJEsG%2BMWe%2BwU7Hpso0j4RokyxDvYN2dBCyBySnahLQQmzLH6QgEmLqytb6zmSnNxcWQ1vR8j83ajR%2FMO6a2aPcJZnuXR4UQItBnD%2BRe29U5q&X-Amz-Signature=9af1d01761c1d42f7831c017847d8e6a913fa8fb4b82820c0eb40aca7d9dc599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

