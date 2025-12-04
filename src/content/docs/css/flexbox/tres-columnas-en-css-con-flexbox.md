---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJ5BYI4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD9YOt3%2B8tUqNDVHaZ8oGYi1QNE0CBvyMG6LVwEgG2RIQIhAM5Pku0hFnvp2Vjp7YUpkClxdHxTwkjBVEwfMZpk9%2B8fKv8DCEQQABoMNjM3NDIzMTgzODA1Igw7VIO9tPejIIbWxwsq3AP0eGevA7KRHe8FeaQQMYSeF1Gzsu0THIptb8%2BoDwol9kxBjS1Mc6i4qQQHb1rVPFjC41AKFz7WaKWgwfGJK3nw5pHxGc5AgP6LKZLA%2FSCbDOhLkX%2B1%2BjDk0WZFW0YttnLmOxXSI9hSpKaZo3wb201hDIdpCFVBn069RdC%2BmeB3p6wwjq4K0qiF5xCPsgiI%2Fq5F9T0znxCMAUsShH%2BzpUmNNyZx3pnfzOvvMwaTVDL9Dn55oNPTvk0FUngNEFV8thKSFdL2j8ZfSTzyguuXKSDKNUeL0Z2Klz5oqlCXHopVcpDXZxsrhHgyVyWjOl5KxFaCZf6E3wRsk6tRa2UFISEv7qlZPfmpPhw%2FQX0NcgisxK8R0jjtOJQwdyXu6%2BaJP6SP2nfvzxLg4ER5%2B0BOQWYElTBr4%2BkxJZ2ZpatNG6DtK87zh%2B4Ywu%2FbfDILHnhy3Uk8OjDgyiZA3aejnqBDZRKL9T%2Fta2XNLabM63aMfv6HCD8JLwNOtyejatB3JVO%2B%2B2TztmvWfmt04hMZVdfp6gLdyOPIvw%2F2LABBN5kCu3RKpuuzt67WxBL5iyyYfcjiB1DP6cJvR2xWTI%2B4Shjw3URNvYyMHYtgkp3QSzH8RMTonCNSM0aH7cdIeNQVQzDcycXJBjqkAcKUqJNGatfrIt0oSt%2FugVAE%2FHCiEH%2FwtWrP9XhqePcx7Nx2mna6eFtbkPhKZFCnAkXnVEQwN8F3%2BJbz4Oa2MQD6Mw8yWzY8X5HZ7NGv7afIpbgfEyEBpf%2FNQK7I7TqIenpnUNc4K57PYz3bwdxURUuU%2B4MWthGl9kfh5OqHwXlUZtRyXVKETuJpjixbRyU9%2Fcc4876%2B2%2FUEsn14kKdj9dLnHobT&X-Amz-Signature=32f91c31a107a64a0c1a8768c853a4f3de56b6c7fe9c3db84bbc460bcfaac7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSJ5BYI4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQD9YOt3%2B8tUqNDVHaZ8oGYi1QNE0CBvyMG6LVwEgG2RIQIhAM5Pku0hFnvp2Vjp7YUpkClxdHxTwkjBVEwfMZpk9%2B8fKv8DCEQQABoMNjM3NDIzMTgzODA1Igw7VIO9tPejIIbWxwsq3AP0eGevA7KRHe8FeaQQMYSeF1Gzsu0THIptb8%2BoDwol9kxBjS1Mc6i4qQQHb1rVPFjC41AKFz7WaKWgwfGJK3nw5pHxGc5AgP6LKZLA%2FSCbDOhLkX%2B1%2BjDk0WZFW0YttnLmOxXSI9hSpKaZo3wb201hDIdpCFVBn069RdC%2BmeB3p6wwjq4K0qiF5xCPsgiI%2Fq5F9T0znxCMAUsShH%2BzpUmNNyZx3pnfzOvvMwaTVDL9Dn55oNPTvk0FUngNEFV8thKSFdL2j8ZfSTzyguuXKSDKNUeL0Z2Klz5oqlCXHopVcpDXZxsrhHgyVyWjOl5KxFaCZf6E3wRsk6tRa2UFISEv7qlZPfmpPhw%2FQX0NcgisxK8R0jjtOJQwdyXu6%2BaJP6SP2nfvzxLg4ER5%2B0BOQWYElTBr4%2BkxJZ2ZpatNG6DtK87zh%2B4Ywu%2FbfDILHnhy3Uk8OjDgyiZA3aejnqBDZRKL9T%2Fta2XNLabM63aMfv6HCD8JLwNOtyejatB3JVO%2B%2B2TztmvWfmt04hMZVdfp6gLdyOPIvw%2F2LABBN5kCu3RKpuuzt67WxBL5iyyYfcjiB1DP6cJvR2xWTI%2B4Shjw3URNvYyMHYtgkp3QSzH8RMTonCNSM0aH7cdIeNQVQzDcycXJBjqkAcKUqJNGatfrIt0oSt%2FugVAE%2FHCiEH%2FwtWrP9XhqePcx7Nx2mna6eFtbkPhKZFCnAkXnVEQwN8F3%2BJbz4Oa2MQD6Mw8yWzY8X5HZ7NGv7afIpbgfEyEBpf%2FNQK7I7TqIenpnUNc4K57PYz3bwdxURUuU%2B4MWthGl9kfh5OqHwXlUZtRyXVKETuJpjixbRyU9%2Fcc4876%2B2%2FUEsn14kKdj9dLnHobT&X-Amz-Signature=ecde8001081ff0fe09f29a10af7e5c2ba3b2425ccbfd299c1f5f23b31099df3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

