---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA435M4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpf4II6BOHx8y0G8BTE%2BVg%2FqV8wRCy2aUM0EbPDS4s9AiBZJLuzmyFs3gk1cjbAcrg2HOirjqmiw6Qk9PmQfH98VCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaaSsbiOMIPMJgjXpKtwDjPfRKaP7WrXdHT%2BmhW6EyIgWlUne2Kg977aGLnd38%2FFEnTGlNtDSU6G79gKmXa5gWbAVTnAJz3llDNO5Q2IrhbKQqlAx3PxDHhk0IpIBrlZC66SU9LKCUbQEpTKnk9vym%2FtkQTveXVAtFuUBCyiD9A7n88bOog7v1TNjxlZscNmTDEKL4M7EK1VjEd0ANe8ognGM6nA1LU2av206xKTWZdBaYTF7zO%2BUVx13hl%2F8aORMejjARR2az2DbEjQEUUNpndve%2ByZh%2BdHCWJ4PwB09tLpecQjzZ7jMsXjUK3341EDikp8mZfKx0K%2BmJraBSCjLch%2FHSCAcUp3YXUTcE5oXNp2szqLRf4pJVXE7mKf5G%2B93ST%2BWDJ8ANghHadql3NDUs97MxYdXDeY%2B%2F5tYna2Kp0H7HTw1hYkE5WG8uLP9x2rc1j1tVN3c86KDWP4NKAP8cCBnMo2fLzSlbxgfGUXsDZyTTJCNtA2fAZ5OF5uv7iW8PjIqG%2BG2TYb3BCVTKYyXN3808PCqi0US%2FT57AGGkmgNye7ueMbfdeSFOh0ON%2BVNOKt5pPO7gKX2dBTichNpIj2cP9R%2BjPoMijHMVDTjhLTYqqDU5BRUNelr%2BQ1zPeb5e4%2FQ7UCkCkIixgGMw8bPZyQY6pgFs4eub4yFDrrjUJSBM6ZXlNuV4oy1qpRBocTqS7YqTDyQxxIaYsbX7Cy%2Fo5HwhRugJefVGbRsEakFSWmZFEMmlEExzcayuorH83duEb%2B8%2BTyDNiyOdzFFN8PVEMBeHVeL6DLZMi1xf5i7lwiCRn0oyXZuxWmYSQdOT2JULhDj0YAW%2FX%2F8EGJCC8OLkuRjWxladJxSumb3D8qn1R%2BQJ%2BN%2FqLn3Z8718&X-Amz-Signature=3ecf1ea3a54eef38a606b16c7ec9ff3888ad259ca8efac44cf66e9f2cf519253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA435M4I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T050729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBpf4II6BOHx8y0G8BTE%2BVg%2FqV8wRCy2aUM0EbPDS4s9AiBZJLuzmyFs3gk1cjbAcrg2HOirjqmiw6Qk9PmQfH98VCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaaSsbiOMIPMJgjXpKtwDjPfRKaP7WrXdHT%2BmhW6EyIgWlUne2Kg977aGLnd38%2FFEnTGlNtDSU6G79gKmXa5gWbAVTnAJz3llDNO5Q2IrhbKQqlAx3PxDHhk0IpIBrlZC66SU9LKCUbQEpTKnk9vym%2FtkQTveXVAtFuUBCyiD9A7n88bOog7v1TNjxlZscNmTDEKL4M7EK1VjEd0ANe8ognGM6nA1LU2av206xKTWZdBaYTF7zO%2BUVx13hl%2F8aORMejjARR2az2DbEjQEUUNpndve%2ByZh%2BdHCWJ4PwB09tLpecQjzZ7jMsXjUK3341EDikp8mZfKx0K%2BmJraBSCjLch%2FHSCAcUp3YXUTcE5oXNp2szqLRf4pJVXE7mKf5G%2B93ST%2BWDJ8ANghHadql3NDUs97MxYdXDeY%2B%2F5tYna2Kp0H7HTw1hYkE5WG8uLP9x2rc1j1tVN3c86KDWP4NKAP8cCBnMo2fLzSlbxgfGUXsDZyTTJCNtA2fAZ5OF5uv7iW8PjIqG%2BG2TYb3BCVTKYyXN3808PCqi0US%2FT57AGGkmgNye7ueMbfdeSFOh0ON%2BVNOKt5pPO7gKX2dBTichNpIj2cP9R%2BjPoMijHMVDTjhLTYqqDU5BRUNelr%2BQ1zPeb5e4%2FQ7UCkCkIixgGMw8bPZyQY6pgFs4eub4yFDrrjUJSBM6ZXlNuV4oy1qpRBocTqS7YqTDyQxxIaYsbX7Cy%2Fo5HwhRugJefVGbRsEakFSWmZFEMmlEExzcayuorH83duEb%2B8%2BTyDNiyOdzFFN8PVEMBeHVeL6DLZMi1xf5i7lwiCRn0oyXZuxWmYSQdOT2JULhDj0YAW%2FX%2F8EGJCC8OLkuRjWxladJxSumb3D8qn1R%2BQJ%2BN%2FqLn3Z8718&X-Amz-Signature=10068694d640a653a4fc25503d1e6aeb3f0d809a82139cc63ba517a84117a618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

