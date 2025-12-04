---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMNTEW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBAD%2F93NwK6xUz4frZqFpzsXg9dn88B0LsUx%2FKELVBGJAiEAnIFBnM7PdNUc2v4VsUdMVOcBYplQEfQa8dg94IJCl80q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCiWSumhyUIj9Frg9ircAzx09KwrJ1uEPqPLL%2FTPZHnxerc%2FuoCWFWOiQjLu8hm8MUfjQHdZAGbUtbrI6eV5846ayACWMs7tQ%2Bp9FEGlge5JwCKKMBlQ%2Bd5FPj640hSu7TIJUPgU5ZTYeGgABPldnvlLRwMJWkYt11I%2FhvguhGtS91%2FGh2Wkc3lEnTWDmuMxeqwMWlb7stOWoVg76MX%2Beb2I%2F7T%2BNkQLIdr%2BRUHyijJPJOiDuss6NvTTYZbVQvbDIeTgn5Z6ZYKIRYtc0ghu%2BN5pq3h2LSgRoW27sivf5NkGvL3Qh3aRsECBtX%2FbwUS%2FumB6829aQdlHUSV8dtgITHwi9Tw6FttIUyUchezufUEexfE3MbueLVOggWgz4iH%2FOMbNo3BLCizuwor2qaRkFC9YrGx0GNFSoSRMx1NNMskS8gN2Dh1dCzabo9BwWSUVTTzHDFbZCYVJE%2BKjzSo0yVlf0F04PcReChiCFTHhyCB5hoiYKxsoNlq1tLQMB6bklqd9huN7vX8I12bSDV%2FLpYysGb3GJR82wKqW2orMSnPyoRxy%2B5mCH4hn4%2FSbwj8KNMdxmKDAVUqAtNW2ulnuN96llP5fA1CrEaZg80WCqXMtl7tVadYz%2BU7ZO0L6NBXIZi1NpZ5rlQda6GVyMLKQxMkGOqUB%2BKYc3wlNEemapDOstCYaYjhDgwAT%2B6zz9Wl7dLuOpDMd2lAWDZzePG2ZGRhORzSHEX%2FY5SNDgyaGluZVnFjL4DUetvjA7JE8ehxpVli%2B6TnEGVHSkdX1ygfIvzmTzmSBuPjTY1KEvBg7imcwVyHkyMZQN0DSeY%2FIQTG9bzla9vPw2%2F46OcTfA%2BZV9%2Bv%2FZxMUiu2S%2FGLRVBow91GB%2BlIpNFI%2FGpby&X-Amz-Signature=30158db47453182d429371bd1f8ea56155ec6ee51dd4d08b8e76319da9ffdb61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRMNTEW5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBAD%2F93NwK6xUz4frZqFpzsXg9dn88B0LsUx%2FKELVBGJAiEAnIFBnM7PdNUc2v4VsUdMVOcBYplQEfQa8dg94IJCl80q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCiWSumhyUIj9Frg9ircAzx09KwrJ1uEPqPLL%2FTPZHnxerc%2FuoCWFWOiQjLu8hm8MUfjQHdZAGbUtbrI6eV5846ayACWMs7tQ%2Bp9FEGlge5JwCKKMBlQ%2Bd5FPj640hSu7TIJUPgU5ZTYeGgABPldnvlLRwMJWkYt11I%2FhvguhGtS91%2FGh2Wkc3lEnTWDmuMxeqwMWlb7stOWoVg76MX%2Beb2I%2F7T%2BNkQLIdr%2BRUHyijJPJOiDuss6NvTTYZbVQvbDIeTgn5Z6ZYKIRYtc0ghu%2BN5pq3h2LSgRoW27sivf5NkGvL3Qh3aRsECBtX%2FbwUS%2FumB6829aQdlHUSV8dtgITHwi9Tw6FttIUyUchezufUEexfE3MbueLVOggWgz4iH%2FOMbNo3BLCizuwor2qaRkFC9YrGx0GNFSoSRMx1NNMskS8gN2Dh1dCzabo9BwWSUVTTzHDFbZCYVJE%2BKjzSo0yVlf0F04PcReChiCFTHhyCB5hoiYKxsoNlq1tLQMB6bklqd9huN7vX8I12bSDV%2FLpYysGb3GJR82wKqW2orMSnPyoRxy%2B5mCH4hn4%2FSbwj8KNMdxmKDAVUqAtNW2ulnuN96llP5fA1CrEaZg80WCqXMtl7tVadYz%2BU7ZO0L6NBXIZi1NpZ5rlQda6GVyMLKQxMkGOqUB%2BKYc3wlNEemapDOstCYaYjhDgwAT%2B6zz9Wl7dLuOpDMd2lAWDZzePG2ZGRhORzSHEX%2FY5SNDgyaGluZVnFjL4DUetvjA7JE8ehxpVli%2B6TnEGVHSkdX1ygfIvzmTzmSBuPjTY1KEvBg7imcwVyHkyMZQN0DSeY%2FIQTG9bzla9vPw2%2F46OcTfA%2BZV9%2Bv%2FZxMUiu2S%2FGLRVBow91GB%2BlIpNFI%2FGpby&X-Amz-Signature=a9e192022c730cca2b9c97f3fbb00dc87873d442c46a3985dc188be0f2175ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

