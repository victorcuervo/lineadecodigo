---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXCPG2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGp7D0RTvt0JGgKmHzBCyiGi2vlWwVhDQTE0ScGd95gzAiBKq3FRJP3F%2FpnTtdxzYKwPQOztxJBvd2C7MP3M5BoKGyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMm4%2Fi1b3%2F4kr%2Fz00cKtwDjJzT9c2wemzgGLthxoB5faakW9U6Nw27I7zklxwo8sSJALdtfgcmGP10D7IqxLFvnhE%2FC6oEwlqlxNNvLzyvV2FIAmsneVeSe8S5lNTac%2FSfBzuZTNrL6ok3V%2BDCsMc3m6lk2Nv3aDBJpfr3dHd6GfJ09nEFQEZevnJPsPE9mTiRRp4t0BMJU2VERt8mf9A650gYZFxvpdFSxUMoYlCxaYSnXujbFApA6uHp0qQC4vsN%2FyFqIF%2BAAbdaD6C9SFq5PXXa5cDI5%2BbizJKLJDQZuuN2qaRGZ%2FIoAiARb2b0PdaQMEy5rtQFLU8E3rZOOrj7y1H1kNKozbwhjEiwh%2BxSRGIpXLNySU3ob1b1sLi2JKZp%2FwEBPn1UYQB2W2vvww7RbPvoCwiRBaBhXAXWIDM3ckz4URwsPkM%2FcfHS%2BwyddvjTdJwgbw%2BhT6PFKVB4G3DlVF1E9dhCTI7rnFOt9F8gn2ltbb%2FXVLeoq0sgipXy6sMlGqtJuQgRo%2BrQPVfi2HYXi%2FlnP2kjIH4lP2KYJAh33L63VoiZSg6TCSIyyaQh2F9IUFnEl%2FkQCMJQt%2BqAf4uoyPZL1O2CzKyhCbWMXMongkIU7%2BV3EDQ82gv0YxxysW54e2X0kBui1A7ngLow173CyQY6pgE5tEDqs0UlqhQIUE0MGwriDruxjtIC4goVRKo6iiKzG1AgwUECDW9z%2Fn12Q04h3esBL7RzclKMEt9OrkHR%2BpXCZUCX%2BPZq7jd6iNrO8XXEsslXwx179TI8NhgDw0b480LlkatXve%2Bj7BGDWlwbnso02NA%2FMcYZ74v2OTd8k%2FeI%2FBOYR6qZ5dHmr1lPJNptpSoOM23qPXDhCEpcBi7AWSS%2FJ8SfBs9O&X-Amz-Signature=e9519b9d8d51043d3b18d88ecd58f48b72dbaeccd887dc439ec0ae79fa117742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVXCPG2C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIGp7D0RTvt0JGgKmHzBCyiGi2vlWwVhDQTE0ScGd95gzAiBKq3FRJP3F%2FpnTtdxzYKwPQOztxJBvd2C7MP3M5BoKGyr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMm4%2Fi1b3%2F4kr%2Fz00cKtwDjJzT9c2wemzgGLthxoB5faakW9U6Nw27I7zklxwo8sSJALdtfgcmGP10D7IqxLFvnhE%2FC6oEwlqlxNNvLzyvV2FIAmsneVeSe8S5lNTac%2FSfBzuZTNrL6ok3V%2BDCsMc3m6lk2Nv3aDBJpfr3dHd6GfJ09nEFQEZevnJPsPE9mTiRRp4t0BMJU2VERt8mf9A650gYZFxvpdFSxUMoYlCxaYSnXujbFApA6uHp0qQC4vsN%2FyFqIF%2BAAbdaD6C9SFq5PXXa5cDI5%2BbizJKLJDQZuuN2qaRGZ%2FIoAiARb2b0PdaQMEy5rtQFLU8E3rZOOrj7y1H1kNKozbwhjEiwh%2BxSRGIpXLNySU3ob1b1sLi2JKZp%2FwEBPn1UYQB2W2vvww7RbPvoCwiRBaBhXAXWIDM3ckz4URwsPkM%2FcfHS%2BwyddvjTdJwgbw%2BhT6PFKVB4G3DlVF1E9dhCTI7rnFOt9F8gn2ltbb%2FXVLeoq0sgipXy6sMlGqtJuQgRo%2BrQPVfi2HYXi%2FlnP2kjIH4lP2KYJAh33L63VoiZSg6TCSIyyaQh2F9IUFnEl%2FkQCMJQt%2BqAf4uoyPZL1O2CzKyhCbWMXMongkIU7%2BV3EDQ82gv0YxxysW54e2X0kBui1A7ngLow173CyQY6pgE5tEDqs0UlqhQIUE0MGwriDruxjtIC4goVRKo6iiKzG1AgwUECDW9z%2Fn12Q04h3esBL7RzclKMEt9OrkHR%2BpXCZUCX%2BPZq7jd6iNrO8XXEsslXwx179TI8NhgDw0b480LlkatXve%2Bj7BGDWlwbnso02NA%2FMcYZ74v2OTd8k%2FeI%2FBOYR6qZ5dHmr1lPJNptpSoOM23qPXDhCEpcBi7AWSS%2FJ8SfBs9O&X-Amz-Signature=d8237ba3efc01ec10f528a23fb828abf59101d09461af723d71fdbee1036fef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

