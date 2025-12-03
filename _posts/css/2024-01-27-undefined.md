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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5CPEPA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDO8xLx90FMbeDuNz9ih7oLDSmgSxrwA%2FuXF0FckXKQzgIgeJOAEVQ0PmxWRMzIujcrnZY9%2FSCO5NdzwM02gy7PF%2Bgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB%2FBhSRMf2JdURNKpCrcAxEWy6DCgTLeaegqqMeLfTkDX87rioK%2FfnhE7G3ut14bEYZ7IcZcxb8OW5Klq3K6DXNCVMN2w85qFc%2BkbVy3sp0qbpuZHWu%2F%2FSJJsK9Li3KH9aj7T5HUsydSurMAuqa9RoxoltPUkpTKF2JpRUOqmkQS1celpPSgW4OhnC8pLs7XT0l0fuHnfucg2a3XloMRG5GDXa3TPeTJhcPdNfyy%2FFz2bgz71I6EqvHNLRGgN9bwJ6uCVR%2FXV78um9um1zvgC9kCZnTe1wvq5LXL2%2FqxlyuWuU5d20OnEmugVJaSJkJe%2FcgKDgfG2VpQLAcSTwSrCW7m%2FnPUYTYneFZrTcwnJlmsoMhiOenUWpf2dl5hlugZhozX2B%2BXudknHcY%2BpqF9wOIPqtMelVohxmLZrvck8xCHXvuJynjEKP9Uy8kJuOs8P51GMbFDSCc6wjYLi7kv3VTq3TZv%2BhrUZ1AxI6rIpd71l64G0jySeK9ZiWFKCtNSV3eu7hPoy7wnQjg9w2qq9qEPIOiuAzcnBOEbg%2B0BiXmhCVD13mCrtbXg%2FkdlaSq5C2WTSuCXr%2FXCBOoee4b71I%2Bvqken3CgUQOiI4eIF7%2F7R4Vc%2FFjilpHH3tgYy8rPht9GjvdI4yNBYSTmuMKTlvckGOqUBmmZwdZNoQJrSWDp55qsoGi6dDi4%2F0KtYVIOfE2jpClG3fOJqmH6JbR99TYefOV%2FSIk2RKg2wviOHTcNrX9gzl5sVatKXbEGFGi9TL2uNrTRSD4OdWzNtpWLcUYeXQRy68GIgx5Yg3wxkdxG%2FixqN8%2B9Esk1GYQ6%2BFG9RjKlDAUBDtaHATitV8X9LSdgJtt1BG8htAFNCSC6pB6npr%2FO4vhXk66I5&X-Amz-Signature=1c64c317bf837c60e3c6ddb3552d80a31ef54c61b384ab0b0c23ceb1a0e99ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N5CPEPA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDO8xLx90FMbeDuNz9ih7oLDSmgSxrwA%2FuXF0FckXKQzgIgeJOAEVQ0PmxWRMzIujcrnZY9%2FSCO5NdzwM02gy7PF%2Bgq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDB%2FBhSRMf2JdURNKpCrcAxEWy6DCgTLeaegqqMeLfTkDX87rioK%2FfnhE7G3ut14bEYZ7IcZcxb8OW5Klq3K6DXNCVMN2w85qFc%2BkbVy3sp0qbpuZHWu%2F%2FSJJsK9Li3KH9aj7T5HUsydSurMAuqa9RoxoltPUkpTKF2JpRUOqmkQS1celpPSgW4OhnC8pLs7XT0l0fuHnfucg2a3XloMRG5GDXa3TPeTJhcPdNfyy%2FFz2bgz71I6EqvHNLRGgN9bwJ6uCVR%2FXV78um9um1zvgC9kCZnTe1wvq5LXL2%2FqxlyuWuU5d20OnEmugVJaSJkJe%2FcgKDgfG2VpQLAcSTwSrCW7m%2FnPUYTYneFZrTcwnJlmsoMhiOenUWpf2dl5hlugZhozX2B%2BXudknHcY%2BpqF9wOIPqtMelVohxmLZrvck8xCHXvuJynjEKP9Uy8kJuOs8P51GMbFDSCc6wjYLi7kv3VTq3TZv%2BhrUZ1AxI6rIpd71l64G0jySeK9ZiWFKCtNSV3eu7hPoy7wnQjg9w2qq9qEPIOiuAzcnBOEbg%2B0BiXmhCVD13mCrtbXg%2FkdlaSq5C2WTSuCXr%2FXCBOoee4b71I%2Bvqken3CgUQOiI4eIF7%2F7R4Vc%2FFjilpHH3tgYy8rPht9GjvdI4yNBYSTmuMKTlvckGOqUBmmZwdZNoQJrSWDp55qsoGi6dDi4%2F0KtYVIOfE2jpClG3fOJqmH6JbR99TYefOV%2FSIk2RKg2wviOHTcNrX9gzl5sVatKXbEGFGi9TL2uNrTRSD4OdWzNtpWLcUYeXQRy68GIgx5Yg3wxkdxG%2FixqN8%2B9Esk1GYQ6%2BFG9RjKlDAUBDtaHATitV8X9LSdgJtt1BG8htAFNCSC6pB6npr%2FO4vhXk66I5&X-Amz-Signature=a037e38c061ab194134d6e62d682d1e348ff3b2457d768dcb9cfcd54a37fb635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

