---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTKUMNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC301DZwwxjHbj15xxeibOUqTQZjDVRr5%2B0kz4mrrWHWQIhALAWCHObSD5xr7JnYis7%2BHd7qpag2rRGtKm%2BnhwGlY3HKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy364hnLFInDfuwujEq3AMqr813QeLT9VPv621JMN%2F%2BSEEx1gYd2vvIrxs4NfLuqRPEwbF27IzbPzb98qqwVEWisWxb0oEEsq1SaoJ2KQcZO2n7EnkFTcXAwE3LQLLEA42BTv8fR6Vr1UkbOl%2BSkhTkLHSse%2FNQUtPjSiUvJgnxjg6l833jzfUqKnT7zbEjIPTJpYep0B1eI%2BRu03fyOWoKMaeaWtNFvhpxiiZt0E693MIWuhcWB%2F8conqNVfLdhsUh2jYui0uTEYRlnVUAex2yR33oUwpxuQe%2FBuMUq3lXldI2kKvH1TCTniosymPf0NGEQtPdvmBKWVVw7hPGaGkTWQM0MFAYkBg81O1%2BCHYrv4P3GPGYskyPiOZbhZdgcRYoa177ItId3rygbUq8%2F%2Bw7mR6Rf8sHvq1Rv4cKal4RECkbEZbRpCGxWj%2Fhbp3G9SUkFWXzGM%2BIin6n5BwV%2FBZhwvYewzswzO%2Fq4ufQsWveeKaAnuRIe9zW8n231sYnUdEZZeAdALVSwNe2nqIxHDgmqhmGtQa9UawV60kPQDQWWHI2rQY733xTNASewkH6ge8Yph2vXrDffeo9PBjKgYeUsso18Q2U0JtQ9uIbzFQr3LPYaB5lSU0kp2ZwR2UXYBtza5IHRBBd03nKazDN5NvJBjqkARPWMl4uV8KMcnE9u5WL4NQqKiZTLsCQWdRfesCAZZh9MOkC8VpTrncTEv%2F%2F2x9ZFeKCQSikTFTTR5aiCCnV1Lu7NJz711G2F9oCxpHpAkRCe8NUcGNJg%2B9twOq5vuPx6Xq4GNI%2FPodTlYXK2WM4p8qI7nnSHUhGm2gay5Yq1LShMjpuDkPY%2BebsfAddHjbyr1BZxJvAoX6NqADFLMKav3DI87NG&X-Amz-Signature=e5af1e3241d97243deb420605db4f0b07f63881c7e71537690711c7b3258166f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBTKUMNC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC301DZwwxjHbj15xxeibOUqTQZjDVRr5%2B0kz4mrrWHWQIhALAWCHObSD5xr7JnYis7%2BHd7qpag2rRGtKm%2BnhwGlY3HKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy364hnLFInDfuwujEq3AMqr813QeLT9VPv621JMN%2F%2BSEEx1gYd2vvIrxs4NfLuqRPEwbF27IzbPzb98qqwVEWisWxb0oEEsq1SaoJ2KQcZO2n7EnkFTcXAwE3LQLLEA42BTv8fR6Vr1UkbOl%2BSkhTkLHSse%2FNQUtPjSiUvJgnxjg6l833jzfUqKnT7zbEjIPTJpYep0B1eI%2BRu03fyOWoKMaeaWtNFvhpxiiZt0E693MIWuhcWB%2F8conqNVfLdhsUh2jYui0uTEYRlnVUAex2yR33oUwpxuQe%2FBuMUq3lXldI2kKvH1TCTniosymPf0NGEQtPdvmBKWVVw7hPGaGkTWQM0MFAYkBg81O1%2BCHYrv4P3GPGYskyPiOZbhZdgcRYoa177ItId3rygbUq8%2F%2Bw7mR6Rf8sHvq1Rv4cKal4RECkbEZbRpCGxWj%2Fhbp3G9SUkFWXzGM%2BIin6n5BwV%2FBZhwvYewzswzO%2Fq4ufQsWveeKaAnuRIe9zW8n231sYnUdEZZeAdALVSwNe2nqIxHDgmqhmGtQa9UawV60kPQDQWWHI2rQY733xTNASewkH6ge8Yph2vXrDffeo9PBjKgYeUsso18Q2U0JtQ9uIbzFQr3LPYaB5lSU0kp2ZwR2UXYBtza5IHRBBd03nKazDN5NvJBjqkARPWMl4uV8KMcnE9u5WL4NQqKiZTLsCQWdRfesCAZZh9MOkC8VpTrncTEv%2F%2F2x9ZFeKCQSikTFTTR5aiCCnV1Lu7NJz711G2F9oCxpHpAkRCe8NUcGNJg%2B9twOq5vuPx6Xq4GNI%2FPodTlYXK2WM4p8qI7nnSHUhGm2gay5Yq1LShMjpuDkPY%2BebsfAddHjbyr1BZxJvAoX6NqADFLMKav3DI87NG&X-Amz-Signature=eefc7aeafd12b4d170b37db6b8dcbf7541d8a91d93c2beaf8324a0453ea9a330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

