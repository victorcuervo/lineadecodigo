---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPMGLA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBn%2FiDxU4TXNlC4psB0iY%2F9TPIGKYPaz4ksFeEaWvkMfAiAv575ymITDYajE0qvPUMUNuVftSEzVDRsJJN9LRPeqJSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM0J5AdRQf%2BCVsfosJKtwDFYd7A7p%2B%2Fezfhs2Wd8IU9LqNDwPB5tof0GjcdDnicggLWrZUkYBg3qt8JXRW0VK7g7zHIDaqvKfTZ7dDpLZfmFeX94663WahSlkmjVkIc7MGdEJEOTrF7rD4uXRsfxsGo8K9p5BE3BBuqgy1csVR%2BaGpCpSBIqeoRKGEQfc2OgG3RUnYCDJwqTf77wUdK7JIyPCW0trAjpsYQNwmJdpIYkvl8DDlP44%2BcXd%2BjOUji6UqIfjF18y5vXvjoNgoKvSsI%2Frz2hnS4oqIr8vtzZBh9sGGTcdixgGR5vruF74VqN21GKVQAZUVJZcelwL98hczClWHNK1rPKKsW1rHNetLrcH6hdWcbxMB4qCaGD0dRYflZvRvyXhk4X8N8PgLgQxPrWjMletP77mch8LE8YVGYOK7QHgvQj8K3ipwzQV3SlTsesRajHnxWQc4GZ8weIB6Sp2pl%2B0AdfCojbEaQRJgN80gSc7%2FImXSnGQYkoJ%2BYTOOKgN%2B6dDWp6ZFi55%2BxhhNV3ogRZN2618k5xqz416ovxXDdPZhNiJXm6M%2B8j8tFi1eT5JxUtrSf2eF6DgcDcIpK8UZyLY80uELKzE5PM7SDbr%2FlViqAkWX1b5zlDfliSMzTeErcnC7SW%2F2erEwo67EyQY6pgGfn2dwXmNRHKZ6hM%2FrR1dhP6yIwNgsKrmpMe2He7a2fn29XwXYW3d%2FwjUSqm9vnIRFIZxwPrFyNESZ%2Fgmd6OFAEi94JtFxIPLl47tqBqSPwo6muHcmuufTpYilem4V6Mx8KtFRN2SM%2BXhbxl6cH2N1iEjsrNKMbxSG%2BIYQcKwSFRSEuqNnYg0UYnnQk2cCix0baiBwZmYFtu5gfNCjt73UG%2B1XMXck&X-Amz-Signature=e2411315228acfd91027f8cbd17ce92b4ebbf9c840b4b7ae703a4c7cb95556dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGPMGLA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBn%2FiDxU4TXNlC4psB0iY%2F9TPIGKYPaz4ksFeEaWvkMfAiAv575ymITDYajE0qvPUMUNuVftSEzVDRsJJN9LRPeqJSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM0J5AdRQf%2BCVsfosJKtwDFYd7A7p%2B%2Fezfhs2Wd8IU9LqNDwPB5tof0GjcdDnicggLWrZUkYBg3qt8JXRW0VK7g7zHIDaqvKfTZ7dDpLZfmFeX94663WahSlkmjVkIc7MGdEJEOTrF7rD4uXRsfxsGo8K9p5BE3BBuqgy1csVR%2BaGpCpSBIqeoRKGEQfc2OgG3RUnYCDJwqTf77wUdK7JIyPCW0trAjpsYQNwmJdpIYkvl8DDlP44%2BcXd%2BjOUji6UqIfjF18y5vXvjoNgoKvSsI%2Frz2hnS4oqIr8vtzZBh9sGGTcdixgGR5vruF74VqN21GKVQAZUVJZcelwL98hczClWHNK1rPKKsW1rHNetLrcH6hdWcbxMB4qCaGD0dRYflZvRvyXhk4X8N8PgLgQxPrWjMletP77mch8LE8YVGYOK7QHgvQj8K3ipwzQV3SlTsesRajHnxWQc4GZ8weIB6Sp2pl%2B0AdfCojbEaQRJgN80gSc7%2FImXSnGQYkoJ%2BYTOOKgN%2B6dDWp6ZFi55%2BxhhNV3ogRZN2618k5xqz416ovxXDdPZhNiJXm6M%2B8j8tFi1eT5JxUtrSf2eF6DgcDcIpK8UZyLY80uELKzE5PM7SDbr%2FlViqAkWX1b5zlDfliSMzTeErcnC7SW%2F2erEwo67EyQY6pgGfn2dwXmNRHKZ6hM%2FrR1dhP6yIwNgsKrmpMe2He7a2fn29XwXYW3d%2FwjUSqm9vnIRFIZxwPrFyNESZ%2Fgmd6OFAEi94JtFxIPLl47tqBqSPwo6muHcmuufTpYilem4V6Mx8KtFRN2SM%2BXhbxl6cH2N1iEjsrNKMbxSG%2BIYQcKwSFRSEuqNnYg0UYnnQk2cCix0baiBwZmYFtu5gfNCjt73UG%2B1XMXck&X-Amz-Signature=94db2bad77e900b8c4f7536f817b7f146aa2844425cc4e3898566c421aee5686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

