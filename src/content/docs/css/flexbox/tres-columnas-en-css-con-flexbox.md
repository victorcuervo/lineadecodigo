---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OVFAVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsoQz1sCBROkipoXeDqvkPd%2Bd9Jl95Ni6nFC%2BELMHYnAiAq2AvTuYLa5NN2Z5rNqX3WsEe6%2BbNFLD3g0JjP8f3N6Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgatbgY37ilp%2BHl%2BkKtwD5zMXKVoqEgkPh3YSZ%2FEIZ2MATdHCLBs8g2NLQJGuZunzuAs6Z1tmH2ykYOtc4tZZGt7%2FDSPX5rsY0K8cF9kCoi8TpXaZRkXR0Z00muXmfRxPfw3G67QDOtibhi2%2F2Ee1mN87SUPEGhml90pir%2BXKouooAaLsmPInG%2BGWIovKeAyqD0WFlEppikcq%2BKSJ7OZ1EfKyDc6jm8mxAxEMByedXBQa%2F90seXchoXhqxtvtLt7YlgclDvChIzWF6QHlxh6Ja5G%2BDCa8fNUGrrhALXDGEBsGWfAN1vfx%2BMiCHYVI5zkK3XfXeGBHzdch6lKyYGXterdfyetcaRz5F5kYtkQnoiqwEnK%2FinYnIPgqST9z8aTbKR0S8d439qfSzxH9uXlq1hWjQ%2F62z22AKT4l40mRmVRiMgc2fCU3i7up884Yd1MPl2Qde0nyeqLU8ly%2BGrERf%2Bfkc8XXSyvUA0J%2FvpEuy%2BQMJNghd7KgZh42jAphv%2BcyvtjcCyKQ90B0EULzx493RcAKx%2B8y16EOgOzjj%2F7w2n%2FZAEulY9UDbGzrLpQXON%2BB9YXUtqHn8P%2BpWbyzN040XyB71ge84os9EgKVvT9G2rsdkG6fKvHA4a4QBPJG1hDi9sDMXV4hq%2BSaCFQw94vIyQY6pgGi6TDmbXXuki28N0kaSKegHf0B5kysidKjaBNeTBgcJ976NYc%2BIxy2%2BJzJWLT%2BcaEtEHXIZDQVzEXVbDJJ%2BLZGs%2F1pusefMdpldaADiK852Ms2KAJvndNlN1S%2FBKjOSvYS9Hgv1SiNMGtUAl7fFl1abWWHi5dFeRlWxIFhHuaIM9bZOdYDh4UX3cERZ1E%2BUwnTaxkQFF%2BRenXEdFdfb0uk%2B%2BpQjEf0&X-Amz-Signature=eb861a3acb67c306b506fca83edaa2613884da1446f2865181049fcb8273640e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4OVFAVZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsoQz1sCBROkipoXeDqvkPd%2Bd9Jl95Ni6nFC%2BELMHYnAiAq2AvTuYLa5NN2Z5rNqX3WsEe6%2BbNFLD3g0JjP8f3N6Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgatbgY37ilp%2BHl%2BkKtwD5zMXKVoqEgkPh3YSZ%2FEIZ2MATdHCLBs8g2NLQJGuZunzuAs6Z1tmH2ykYOtc4tZZGt7%2FDSPX5rsY0K8cF9kCoi8TpXaZRkXR0Z00muXmfRxPfw3G67QDOtibhi2%2F2Ee1mN87SUPEGhml90pir%2BXKouooAaLsmPInG%2BGWIovKeAyqD0WFlEppikcq%2BKSJ7OZ1EfKyDc6jm8mxAxEMByedXBQa%2F90seXchoXhqxtvtLt7YlgclDvChIzWF6QHlxh6Ja5G%2BDCa8fNUGrrhALXDGEBsGWfAN1vfx%2BMiCHYVI5zkK3XfXeGBHzdch6lKyYGXterdfyetcaRz5F5kYtkQnoiqwEnK%2FinYnIPgqST9z8aTbKR0S8d439qfSzxH9uXlq1hWjQ%2F62z22AKT4l40mRmVRiMgc2fCU3i7up884Yd1MPl2Qde0nyeqLU8ly%2BGrERf%2Bfkc8XXSyvUA0J%2FvpEuy%2BQMJNghd7KgZh42jAphv%2BcyvtjcCyKQ90B0EULzx493RcAKx%2B8y16EOgOzjj%2F7w2n%2FZAEulY9UDbGzrLpQXON%2BB9YXUtqHn8P%2BpWbyzN040XyB71ge84os9EgKVvT9G2rsdkG6fKvHA4a4QBPJG1hDi9sDMXV4hq%2BSaCFQw94vIyQY6pgGi6TDmbXXuki28N0kaSKegHf0B5kysidKjaBNeTBgcJ976NYc%2BIxy2%2BJzJWLT%2BcaEtEHXIZDQVzEXVbDJJ%2BLZGs%2F1pusefMdpldaADiK852Ms2KAJvndNlN1S%2FBKjOSvYS9Hgv1SiNMGtUAl7fFl1abWWHi5dFeRlWxIFhHuaIM9bZOdYDh4UX3cERZ1E%2BUwnTaxkQFF%2BRenXEdFdfb0uk%2B%2BpQjEf0&X-Amz-Signature=12d11c243b22100b073814b4de4c38365ad6405a9a7b258a8e1da1f958596234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

