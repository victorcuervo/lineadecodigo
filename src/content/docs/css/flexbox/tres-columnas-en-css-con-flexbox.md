---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMMWY5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6J00cIr%2BzqowAmD11j7G1TOFYL6D894Fug12NoiT%2BjAiEAysKPa933pMloxgIBdNIX%2FyeomMU5L0%2Bpgcnnl9KCkXcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0x%2FXib3SajDNmxjyrcA7ugIdoedZgk%2F%2BHUnvRjy%2BDU%2BvehFrUsT37NMMhyqIG5uDHBlKD9D5%2FoYkM19relgn4kmyy9vmRFdCz0XPlKA6fJuR7wmF9Tkawe%2Bb27unLqZDB2sSKb0x9q%2BvoLpiTaSW9lZCpcadqPHiIsyetFDjdxoJGcr5w7AbOzE2fIN5hVQYUDZjrZDxy4QTZQruUyVvOymGv7dxMxGnHmcRF%2BUx59UeO35tkeglCvhPvuheOVTX4dKc7QYlcu%2F34iefqtZ7h2f3EcOCaWvST4FOTAkwpq%2BsW2p%2FK9ElpdwEGml4CjNIKr1pvIFbVeifaXW0jLIex7EK4Ox%2B0q2sbkemJTVBFijpcZm9llptfTqqVGDEJYpMxo6T%2BK7y4gaRRlTLo09FZ6w%2BREDLPksnEEGxONHOEZmWt%2FvsoD7wjvuDFbi6QrDCbq%2FK8Yh%2F0ifSJpGMS1fLItbW8ohOZQSA4pc%2BTds24DDSQCNx583tYCMa5NZUX2xvDkXFz23uawt32jLSUZgMUE6JTysrQXZCTd6H5yMWo%2Bi3vkyJ5%2B6E6FWpnqCkLXbgONUJBKN4NsD1Q%2F02xmMq5mKnRezL3XCyk2lI%2FjHFdK4z4Ivw1cyPuQfXpjuAMjYuC1vTukZMH3pvIfMKjt2ckGOqUBFN1rfycTLOTl92YQpIb2LJKdqHvndWzO4g3MO4e8n1dLLh9chzUJxI9PKqjmwmPi88Jxj2GrV2kOxOIo3YQChW5QPMObXpb8BorUdKZ%2FmAbRWwS3OeqlgUIfO8ti1gmmonH2UqecLGSE7Re9Il0Tev8XSEt%2BrucYXf8wLIdFsmwbdU3dC0kt37rwE5FZzSMHwjiqfSpZ05W%2Fz%2B42WZdTPCtVJe1y&X-Amz-Signature=422710631d3e234a439226497d87935e5cece20242a8650785750ddac1d934ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMMWY5D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6J00cIr%2BzqowAmD11j7G1TOFYL6D894Fug12NoiT%2BjAiEAysKPa933pMloxgIBdNIX%2FyeomMU5L0%2Bpgcnnl9KCkXcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0x%2FXib3SajDNmxjyrcA7ugIdoedZgk%2F%2BHUnvRjy%2BDU%2BvehFrUsT37NMMhyqIG5uDHBlKD9D5%2FoYkM19relgn4kmyy9vmRFdCz0XPlKA6fJuR7wmF9Tkawe%2Bb27unLqZDB2sSKb0x9q%2BvoLpiTaSW9lZCpcadqPHiIsyetFDjdxoJGcr5w7AbOzE2fIN5hVQYUDZjrZDxy4QTZQruUyVvOymGv7dxMxGnHmcRF%2BUx59UeO35tkeglCvhPvuheOVTX4dKc7QYlcu%2F34iefqtZ7h2f3EcOCaWvST4FOTAkwpq%2BsW2p%2FK9ElpdwEGml4CjNIKr1pvIFbVeifaXW0jLIex7EK4Ox%2B0q2sbkemJTVBFijpcZm9llptfTqqVGDEJYpMxo6T%2BK7y4gaRRlTLo09FZ6w%2BREDLPksnEEGxONHOEZmWt%2FvsoD7wjvuDFbi6QrDCbq%2FK8Yh%2F0ifSJpGMS1fLItbW8ohOZQSA4pc%2BTds24DDSQCNx583tYCMa5NZUX2xvDkXFz23uawt32jLSUZgMUE6JTysrQXZCTd6H5yMWo%2Bi3vkyJ5%2B6E6FWpnqCkLXbgONUJBKN4NsD1Q%2F02xmMq5mKnRezL3XCyk2lI%2FjHFdK4z4Ivw1cyPuQfXpjuAMjYuC1vTukZMH3pvIfMKjt2ckGOqUBFN1rfycTLOTl92YQpIb2LJKdqHvndWzO4g3MO4e8n1dLLh9chzUJxI9PKqjmwmPi88Jxj2GrV2kOxOIo3YQChW5QPMObXpb8BorUdKZ%2FmAbRWwS3OeqlgUIfO8ti1gmmonH2UqecLGSE7Re9Il0Tev8XSEt%2BrucYXf8wLIdFsmwbdU3dC0kt37rwE5FZzSMHwjiqfSpZ05W%2Fz%2B42WZdTPCtVJe1y&X-Amz-Signature=67a11f311f791b83a636f82c6c0853bed7c6251a7cd47022749100acde7f9097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

