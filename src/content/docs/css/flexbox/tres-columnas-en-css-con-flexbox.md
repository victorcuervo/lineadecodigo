---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFM7LRP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bw2pKKazdM4gffHW0HDyzF4MvusNtJRY8bSazH2H3eQIhAOuMTy2nCvXIcpdcr1eXZtIMh%2Fn4mAcGRomz9lUiq0TCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQTB3hjwMoHwl7S2Iq3APdaErEAhdJXXb0NLZXsaYhft2LjMBvslmE0NkGQfNvsxDVwFehLWUkyxNfLmAqKgpyW9HdEcjy%2BtuZtrmggmZBld7zdC6ixrP2cCyST097Uk2Cj7PYWuR4FYN7qFnXjsoQrmR0MbqPwAav7NGnHsc6gcVYzlOV8eJw4gsyQ4boU82b9pr3Lm3Pp9%2Brgan1fHpETAvHtNYecoLcoYDuhxN075hitmTHAbdi3V5G%2B%2FH8VIMb3pb3lhGu16sMYAB%2F88Oz4BM3kTAdhMLD6waJ4AW9uaTk4shHy%2BySYp116oILLY9qgfOsll%2Bgv1hPcmFA7SUpcFnTA2ewWwOmjUB4%2BrK8G3s8py2%2BZtu%2BkBhx1E3stmCVTe8eMr7BI%2FiuUdonRQxvWUKVoSZzYrZ%2B3RXSOAFQIsra%2FA7rzdMY0A%2FcBdYmYI9K1g8Z3lWcIh47TkDeHka4pLjLJ7v9VF529UeyoV4bA5BUPuB9BJM%2BviRVgeWq3o7RUOirVOOq3u1F%2B1b0RhYOR38vnnwOmLXCs9n3fkHRq71Q7LN5TJyDsn%2BA%2FhR%2Bjp1v1lRDmylgT7hsc0FRsXuomm6BQhI%2BeiKc11uiAeiI%2BezzY4YYvHRXBJ6DFHdNgOCLyux3Z81ZBvk8zTC4s9zJBjqkATHIP1NNEbDwUZzK42DU56hljICklQB0Gb1ALGKh%2Bji1HHAX8yoj1UScOH%2BvBTC9m1YKJWPXAM%2FlM9TvdaFZrvTb13kegyOctwTjxqzQiZGR9i7Cmg%2FfaLaRIqZZfqlYK6diKg2JnHgB5QmiOMJGXzrVhUCAavmXe0XDTDRpPl56Ko9AO620Ea03yozNkJsuz3OR2LcNbWB6DmUqtg%2BXEPOYlNMU&X-Amz-Signature=e416f40f5fde130a9ecff1aadadd64fef8b1d2788787732d3867eed785a57a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RFM7LRP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T192844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Bw2pKKazdM4gffHW0HDyzF4MvusNtJRY8bSazH2H3eQIhAOuMTy2nCvXIcpdcr1eXZtIMh%2Fn4mAcGRomz9lUiq0TCKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQTB3hjwMoHwl7S2Iq3APdaErEAhdJXXb0NLZXsaYhft2LjMBvslmE0NkGQfNvsxDVwFehLWUkyxNfLmAqKgpyW9HdEcjy%2BtuZtrmggmZBld7zdC6ixrP2cCyST097Uk2Cj7PYWuR4FYN7qFnXjsoQrmR0MbqPwAav7NGnHsc6gcVYzlOV8eJw4gsyQ4boU82b9pr3Lm3Pp9%2Brgan1fHpETAvHtNYecoLcoYDuhxN075hitmTHAbdi3V5G%2B%2FH8VIMb3pb3lhGu16sMYAB%2F88Oz4BM3kTAdhMLD6waJ4AW9uaTk4shHy%2BySYp116oILLY9qgfOsll%2Bgv1hPcmFA7SUpcFnTA2ewWwOmjUB4%2BrK8G3s8py2%2BZtu%2BkBhx1E3stmCVTe8eMr7BI%2FiuUdonRQxvWUKVoSZzYrZ%2B3RXSOAFQIsra%2FA7rzdMY0A%2FcBdYmYI9K1g8Z3lWcIh47TkDeHka4pLjLJ7v9VF529UeyoV4bA5BUPuB9BJM%2BviRVgeWq3o7RUOirVOOq3u1F%2B1b0RhYOR38vnnwOmLXCs9n3fkHRq71Q7LN5TJyDsn%2BA%2FhR%2Bjp1v1lRDmylgT7hsc0FRsXuomm6BQhI%2BeiKc11uiAeiI%2BezzY4YYvHRXBJ6DFHdNgOCLyux3Z81ZBvk8zTC4s9zJBjqkATHIP1NNEbDwUZzK42DU56hljICklQB0Gb1ALGKh%2Bji1HHAX8yoj1UScOH%2BvBTC9m1YKJWPXAM%2FlM9TvdaFZrvTb13kegyOctwTjxqzQiZGR9i7Cmg%2FfaLaRIqZZfqlYK6diKg2JnHgB5QmiOMJGXzrVhUCAavmXe0XDTDRpPl56Ko9AO620Ea03yozNkJsuz3OR2LcNbWB6DmUqtg%2BXEPOYlNMU&X-Amz-Signature=a0780b0aa25145129a811956ac037356d154cfbd87762f58af58dabc43a59434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

