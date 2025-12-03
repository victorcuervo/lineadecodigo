---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673O37Y35%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBbfT86Q%2B5nRKK7qQcXbMV9pNNxWt5%2FL%2BSH6yC6lJZgYAiBCctHmektRdb5s2Kxos4BVwpdwZkdzpeJc1xjaGzgAMyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM8y3c%2Fl5v75hkCfr8KtwDx7vF4lF7iFzLCXKwUWNUeCRJqfG48DVGzo4xGoIPzqpsgobD0nYF%2BEY%2B2vY6nhyVWKHwkBvVXG4S013%2BqV0ImS3GFaTdYLhfYciO3MzqYuGqjv9sb3Z3%2FVbPMv23f4%2B%2BqkFzngjsMGqF8vuxm%2FKR7eY7T7XxeyW87ZfSgQaT3fHzRP9paTHqKjjJV%2BX%2F4fA7ha%2FZiOkoIEV9C1j9n2Zt72oHnO1cdT%2FUk2LNx5XDSPMS6xKjPL8T97O%2Fx4oIZIZmNzOO4MjlRQYVAmhD23UOFSQYKA29%2BghNk3Go5onLFVVjX5ZTBKbQXa14Sc64Q081q7PznFF%2FOnE1w3uEf4Btxqu0IG9S8kOz%2FZ6W5yGMbohtpfh93odRByYW7EJu62xKoWSTF%2F3fo%2BJtmS2YA7DZm8fLDvaEJ%2BqlrbXSj5yQFyNKM9%2B2zLktoFW33LsaSLZUzCuO5%2F2A9NXJem7lhVUaaxDI8gXaFe3L2glPEfvVUkbPrFZm7XAg7SKnHGdQuf7BKnt6alkj%2BdDvaMMOECBI99DQuWBQQ2XIMAHN37T1060ed9zZqic7J6UsxkYbrJDweprPSIDrte8vP1q8HSMfAKzgOb%2FrbQ5STwaiWERxmn1BLB4LZFWTOa49V8IwrunAyQY6pgFNeAAo3Vimxxg3ceGVsPIvpelm4DcudCMUmwEzSUU6sEwv%2F83uO%2FrRrvyoPTYkLwDngSVkxfMNl1zHnax7wuHfa03ZIzhOq4AqlOFYDwl4g5eMaFM6P2MD26vU1E42kFK%2FP9gLlr2UQFCZq6a78urqGiLkoy3Ci%2FW5k%2Fi%2BCLlIAWoDm71h%2BTfCtcUrs1qCjWLqRrrYyIQeYtFTupcN1yd1Q0L%2F0%2BcQ&X-Amz-Signature=67e2109cb08fbbb8c0dcc7b9716a8492c0946af855be88ebc036edb0db0ab82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673O37Y35%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIBbfT86Q%2B5nRKK7qQcXbMV9pNNxWt5%2FL%2BSH6yC6lJZgYAiBCctHmektRdb5s2Kxos4BVwpdwZkdzpeJc1xjaGzgAMyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM8y3c%2Fl5v75hkCfr8KtwDx7vF4lF7iFzLCXKwUWNUeCRJqfG48DVGzo4xGoIPzqpsgobD0nYF%2BEY%2B2vY6nhyVWKHwkBvVXG4S013%2BqV0ImS3GFaTdYLhfYciO3MzqYuGqjv9sb3Z3%2FVbPMv23f4%2B%2BqkFzngjsMGqF8vuxm%2FKR7eY7T7XxeyW87ZfSgQaT3fHzRP9paTHqKjjJV%2BX%2F4fA7ha%2FZiOkoIEV9C1j9n2Zt72oHnO1cdT%2FUk2LNx5XDSPMS6xKjPL8T97O%2Fx4oIZIZmNzOO4MjlRQYVAmhD23UOFSQYKA29%2BghNk3Go5onLFVVjX5ZTBKbQXa14Sc64Q081q7PznFF%2FOnE1w3uEf4Btxqu0IG9S8kOz%2FZ6W5yGMbohtpfh93odRByYW7EJu62xKoWSTF%2F3fo%2BJtmS2YA7DZm8fLDvaEJ%2BqlrbXSj5yQFyNKM9%2B2zLktoFW33LsaSLZUzCuO5%2F2A9NXJem7lhVUaaxDI8gXaFe3L2glPEfvVUkbPrFZm7XAg7SKnHGdQuf7BKnt6alkj%2BdDvaMMOECBI99DQuWBQQ2XIMAHN37T1060ed9zZqic7J6UsxkYbrJDweprPSIDrte8vP1q8HSMfAKzgOb%2FrbQ5STwaiWERxmn1BLB4LZFWTOa49V8IwrunAyQY6pgFNeAAo3Vimxxg3ceGVsPIvpelm4DcudCMUmwEzSUU6sEwv%2F83uO%2FrRrvyoPTYkLwDngSVkxfMNl1zHnax7wuHfa03ZIzhOq4AqlOFYDwl4g5eMaFM6P2MD26vU1E42kFK%2FP9gLlr2UQFCZq6a78urqGiLkoy3Ci%2FW5k%2Fi%2BCLlIAWoDm71h%2BTfCtcUrs1qCjWLqRrrYyIQeYtFTupcN1yd1Q0L%2F0%2BcQ&X-Amz-Signature=3ea00427b30e2237d86a5b5dfafbb90b3592cab6d59d9be662c2c92cd4b47974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

