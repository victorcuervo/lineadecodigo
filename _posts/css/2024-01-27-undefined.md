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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMA46MS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBgDVAFWWoROFtK67q5WQjZXPQoOsgmzC64JA%2F7tpZMPAiEAtS%2BxilM7G0tl3QHqhICBJbmkA14BiAUkCkDKmMXWyUMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGC30xXx77DfLqtOFCrcA9hlG3BffUGmoL2CHWNnaGrzqUllTFaiUrwOr%2BMxs53kZ3anf3ospDri%2B8OS5mq1aGRTYd2JYO6QTru0KPWPs9a2lTtun2BEAesbjlM2oLt9woDP%2B9QPwjC%2FB1q1HjF2%2BvNcapJDFJ8Hl%2BLky6vnBZ5GrK0oWdTwA%2Bd6Jt57UbaSWkJsvGVIA4jxgFtinJ%2FtEkdYzXpsDzcv7DClYaLZRFT7a4LI1z57Db5NqJuGnjp9z6jFG7bob1WZeMkpfp6Pdn3hxHS21SN9brPByAglkxWXdrpUnOIk9EvsfPdpIbHDTniWX7BqhND5dWWosoRjXxoER6p3lFXX6eUTelgKIDW9cnvZKoKV9KiW3r0jDMV1dPDs%2F5cpvnOT7L2VH6jNGhk%2Fcsc5L9TI8hekZwhX%2Fr2jLlnK3Zu9BVAgfvm%2BYMH2dMLthHXVFvKOtJh4boAMIGwlsD%2F6%2FzQoAmobYMlaCHLhv%2F9oSPac%2BJ2lzuAgE8WwS0jIOR4kD%2BXDHcz4CtpChCertO0UvuHo3bjuITQiZvraEMmp%2FS1uVAMj8CJ%2BzWPXGRQhz32OpWnHCU03dhgZdOASwEfcEchT%2BFL503wRZIfvdddcAviobc6hjo3bBAjtqQQZhah08ERgyldaMImbv8kGOqUBU6JmjycRG9Swuyk3nZmJ2ypzfcX53yGTbaEH6XxHtNYZJspd0OTcEIqh1m9%2Fenl0%2BfUKZ5Nh6%2FGxunwFU1zdUI2kw9LhTSOTThANgqVwtpeYTEC5EWkFPaoESH9iq90%2B%2BzP8W1rfhUSsY8%2BQLhGQXF4ZxyMfW74bTEZzHOVasCQrwagYXOr53y3saCmy5cObp8UFsLCOCDaCHXv4a6gfz45fPVC0&X-Amz-Signature=e02bd5364f53510880dd2d8527bab2f383bff05019d1d0dc5bf34a655f618880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZMA46MS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIBgDVAFWWoROFtK67q5WQjZXPQoOsgmzC64JA%2F7tpZMPAiEAtS%2BxilM7G0tl3QHqhICBJbmkA14BiAUkCkDKmMXWyUMq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGC30xXx77DfLqtOFCrcA9hlG3BffUGmoL2CHWNnaGrzqUllTFaiUrwOr%2BMxs53kZ3anf3ospDri%2B8OS5mq1aGRTYd2JYO6QTru0KPWPs9a2lTtun2BEAesbjlM2oLt9woDP%2B9QPwjC%2FB1q1HjF2%2BvNcapJDFJ8Hl%2BLky6vnBZ5GrK0oWdTwA%2Bd6Jt57UbaSWkJsvGVIA4jxgFtinJ%2FtEkdYzXpsDzcv7DClYaLZRFT7a4LI1z57Db5NqJuGnjp9z6jFG7bob1WZeMkpfp6Pdn3hxHS21SN9brPByAglkxWXdrpUnOIk9EvsfPdpIbHDTniWX7BqhND5dWWosoRjXxoER6p3lFXX6eUTelgKIDW9cnvZKoKV9KiW3r0jDMV1dPDs%2F5cpvnOT7L2VH6jNGhk%2Fcsc5L9TI8hekZwhX%2Fr2jLlnK3Zu9BVAgfvm%2BYMH2dMLthHXVFvKOtJh4boAMIGwlsD%2F6%2FzQoAmobYMlaCHLhv%2F9oSPac%2BJ2lzuAgE8WwS0jIOR4kD%2BXDHcz4CtpChCertO0UvuHo3bjuITQiZvraEMmp%2FS1uVAMj8CJ%2BzWPXGRQhz32OpWnHCU03dhgZdOASwEfcEchT%2BFL503wRZIfvdddcAviobc6hjo3bBAjtqQQZhah08ERgyldaMImbv8kGOqUBU6JmjycRG9Swuyk3nZmJ2ypzfcX53yGTbaEH6XxHtNYZJspd0OTcEIqh1m9%2Fenl0%2BfUKZ5Nh6%2FGxunwFU1zdUI2kw9LhTSOTThANgqVwtpeYTEC5EWkFPaoESH9iq90%2B%2BzP8W1rfhUSsY8%2BQLhGQXF4ZxyMfW74bTEZzHOVasCQrwagYXOr53y3saCmy5cObp8UFsLCOCDaCHXv4a6gfz45fPVC0&X-Amz-Signature=bbe61caf196ca8ed890aebeb99c95231919d339ed8d0b4c5416ed082e3ea3f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

