---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2NYMQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjDR3TG9xOdydNw8%2FJAX8zFs1q3o2rrm3hJLaUVQXbAAiBzfNlJpD9t9%2BQYsbx0mf%2BxKhuqQgV8Prcv3BZu%2FwdUgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKObhYguzsBwxBhixKtwDTIA5SxzSuwgUgq6S6WqfZYPqS%2FOMHgfpiPr%2F6IeNsV6JED3DojQW5Low4pqlxvyufjkvoIp1AJOgPRN8gDhV6Uh%2BQFLOyn%2BURzqcR9cQ7kfMJSb5HuJCg7HCjU6FWma90VyNZehGNdZSUSFr%2BBZpG%2FD3WhZcYXzTMYdWwE%2F0a3ivKWl1lFsCxGgcOPzYh7zri8NsZVDv8vYP%2FTaiskRC1kFKMwVdskt4cjAZ0KlwN5TUrENj7desFcaeASZZ%2FbPkChXjBiwQSBg0e4b30QhRigQlAzbbyWyHkfDeCHQ3D%2F4EJmoeNJFZoNch8WW6h9tedVI4g27wkNhAglSwJSSNQypL1k7uXgVEhqPsFUgFEuyiURHU8fGaF%2F559%2BliY3sVaECyUwD6zb%2B6Zc9ImWIqruloaoIFwx%2F%2BsI9tMU04VWK%2FsNrCN4xxeuzYoVyxa1FTP1b2%2Bqbr5ja3iG1I3D1zE5CidtiS9NMy%2FlwilUDXNXsKZ4R2eL0gc8gsR309a5Pi59%2F6o2hH5sSxumc4AM3qD3VLGfblKTfxyqbkGQnLaEyFoVBMDKlsqFYps8RG2wx4mgpx8Q25WbnhEZt%2FPKMXNO1hPSZ6Lcq5PIlRUveccHs9mzRJeiGWyCV%2Fe98wpevPyQY6pgH5mtLBO%2Bn1CR0%2BKuFfUrg8PRGvRoLO4IJ%2FZTcIWSA9N6OSS4eRbPt65iWRklMlCiZ8UkaFeNL4SGMyqoDIHLMkegJVQmO2SbrlMjO9T0iBXvSWemXK9g53AobToTleF%2FjambsILooc4oD4ASXAqpZaX0re2yYqxc3r73Ejqf82fZMKeItEZvNW%2B1FkDMit9uDJoG6lz3CKgA5wwQxJd0lxonS5pu5t&X-Amz-Signature=ceb33f61e4949e5fc35adaf87de8912d0d2f3139d325db6d0987580d53cd6496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E2NYMQY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjDR3TG9xOdydNw8%2FJAX8zFs1q3o2rrm3hJLaUVQXbAAiBzfNlJpD9t9%2BQYsbx0mf%2BxKhuqQgV8Prcv3BZu%2FwdUgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMKObhYguzsBwxBhixKtwDTIA5SxzSuwgUgq6S6WqfZYPqS%2FOMHgfpiPr%2F6IeNsV6JED3DojQW5Low4pqlxvyufjkvoIp1AJOgPRN8gDhV6Uh%2BQFLOyn%2BURzqcR9cQ7kfMJSb5HuJCg7HCjU6FWma90VyNZehGNdZSUSFr%2BBZpG%2FD3WhZcYXzTMYdWwE%2F0a3ivKWl1lFsCxGgcOPzYh7zri8NsZVDv8vYP%2FTaiskRC1kFKMwVdskt4cjAZ0KlwN5TUrENj7desFcaeASZZ%2FbPkChXjBiwQSBg0e4b30QhRigQlAzbbyWyHkfDeCHQ3D%2F4EJmoeNJFZoNch8WW6h9tedVI4g27wkNhAglSwJSSNQypL1k7uXgVEhqPsFUgFEuyiURHU8fGaF%2F559%2BliY3sVaECyUwD6zb%2B6Zc9ImWIqruloaoIFwx%2F%2BsI9tMU04VWK%2FsNrCN4xxeuzYoVyxa1FTP1b2%2Bqbr5ja3iG1I3D1zE5CidtiS9NMy%2FlwilUDXNXsKZ4R2eL0gc8gsR309a5Pi59%2F6o2hH5sSxumc4AM3qD3VLGfblKTfxyqbkGQnLaEyFoVBMDKlsqFYps8RG2wx4mgpx8Q25WbnhEZt%2FPKMXNO1hPSZ6Lcq5PIlRUveccHs9mzRJeiGWyCV%2Fe98wpevPyQY6pgH5mtLBO%2Bn1CR0%2BKuFfUrg8PRGvRoLO4IJ%2FZTcIWSA9N6OSS4eRbPt65iWRklMlCiZ8UkaFeNL4SGMyqoDIHLMkegJVQmO2SbrlMjO9T0iBXvSWemXK9g53AobToTleF%2FjambsILooc4oD4ASXAqpZaX0re2yYqxc3r73Ejqf82fZMKeItEZvNW%2B1FkDMit9uDJoG6lz3CKgA5wwQxJd0lxonS5pu5t&X-Amz-Signature=8e6c9c924bf3ad63702f1b26b8e5a021c40628aa8aaa985bab122b7f059864a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

