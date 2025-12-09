---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TULTDFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJSfE2vNEyowXumzslmXxKvnE7wpH61k6zhwmwvqC13AiEA6uwpyf1LMVdwxy46cMOqVSrWFJZl7yLdzmU5bIJQ798qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbYPtopSiNXrGeGCyrcA2RCj4pkqCGFfh5gX71wx14LSaLFji%2FfCPKMwzFLQmYrZHVPSCJlTX66geyYVzP44WmYGL9HGm9iHfzatUaxwMZioP8U6kxqV01YcFQuahqMpDRXsgJn7nvWrFiF9HclGbdmTllne8dA73ntMh%2BngYJ5hJKoP3KZcYzI9%2FYd92NOgOI7NBvQYknBGAPYTbNkHhYAZ7vu8Q55eJYhuBsDRUjOceEHzbcegu6S8mLe4GzmB%2F0AuFmnhEyVBVdEXnxe6Zb%2FAySERi6URu8ehwRgAjWYciAHeOonE7w7X3a0qsBCNVl0yHQqCJrQc8uq4TBrpqut2qMD6bTMwu%2FViQObL89HWc56WC1HY1%2BzJFSfiohOGOf9q3yG1TknXZ89XOARMvig1PwY93Y224ZWNgXn27rM9YqscuGKdmZEM2u92nOcKIDQ4N8ZgYtZVXCHAFtfFTt8jH1Ld19PPXPouD2C8Js%2FLFXaaFA7OKjlh%2FB9s42Ndt3LgvKpraUEk3b9yiBFyH4EHf9PPnUF64RvEdyIOsM29VTFz9vkJaFDKYL6QijpZdI3R4mE1y5EZtMHPZCA94s3SEHXbbg3dd%2FnCR0fg%2Fg%2FdfP0wZb0%2Fo0Q%2FocwKDkJ6DzM5OSdqtbiE5CVMP3p3ckGOqUBMH3b24tUz4V2PJAoMGvxiTtdkecf4SccEMP8eGE1jDQP6I1JsAkJApDCnoJdKTH2GbeFnmlbfoIeTVj70Uf9BzDHW0zvf%2F9iPzNtU9FabTeo2GZS9kQgpQvjI0%2FQNaI7XdAmDM7Ag5JJqrpuBNdRzJKZJPcla3CfZL%2BTsleeUvMzmVHzwRrqypjyZoKS208ulSkMHqRtnGDo%2BIdp3cmq4ob3KDcf&X-Amz-Signature=deaa18326d6db9ffce7d65b8d24f56be5815af838d9b0dae58ca814151100a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TULTDFE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJSfE2vNEyowXumzslmXxKvnE7wpH61k6zhwmwvqC13AiEA6uwpyf1LMVdwxy46cMOqVSrWFJZl7yLdzmU5bIJQ798qiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMbYPtopSiNXrGeGCyrcA2RCj4pkqCGFfh5gX71wx14LSaLFji%2FfCPKMwzFLQmYrZHVPSCJlTX66geyYVzP44WmYGL9HGm9iHfzatUaxwMZioP8U6kxqV01YcFQuahqMpDRXsgJn7nvWrFiF9HclGbdmTllne8dA73ntMh%2BngYJ5hJKoP3KZcYzI9%2FYd92NOgOI7NBvQYknBGAPYTbNkHhYAZ7vu8Q55eJYhuBsDRUjOceEHzbcegu6S8mLe4GzmB%2F0AuFmnhEyVBVdEXnxe6Zb%2FAySERi6URu8ehwRgAjWYciAHeOonE7w7X3a0qsBCNVl0yHQqCJrQc8uq4TBrpqut2qMD6bTMwu%2FViQObL89HWc56WC1HY1%2BzJFSfiohOGOf9q3yG1TknXZ89XOARMvig1PwY93Y224ZWNgXn27rM9YqscuGKdmZEM2u92nOcKIDQ4N8ZgYtZVXCHAFtfFTt8jH1Ld19PPXPouD2C8Js%2FLFXaaFA7OKjlh%2FB9s42Ndt3LgvKpraUEk3b9yiBFyH4EHf9PPnUF64RvEdyIOsM29VTFz9vkJaFDKYL6QijpZdI3R4mE1y5EZtMHPZCA94s3SEHXbbg3dd%2FnCR0fg%2Fg%2FdfP0wZb0%2Fo0Q%2FocwKDkJ6DzM5OSdqtbiE5CVMP3p3ckGOqUBMH3b24tUz4V2PJAoMGvxiTtdkecf4SccEMP8eGE1jDQP6I1JsAkJApDCnoJdKTH2GbeFnmlbfoIeTVj70Uf9BzDHW0zvf%2F9iPzNtU9FabTeo2GZS9kQgpQvjI0%2FQNaI7XdAmDM7Ag5JJqrpuBNdRzJKZJPcla3CfZL%2BTsleeUvMzmVHzwRrqypjyZoKS208ulSkMHqRtnGDo%2BIdp3cmq4ob3KDcf&X-Amz-Signature=f9de8fd820f6115da14c82fead950c046b8e3b03f89f5007ab9a4ea7696334fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

