---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWARU5OK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHUkKxdf1rmntmWUxgGVhigOQ9eLK9eaugzE227KpwQIgdVxkPu2FM%2BjxftvnTRxxoIXJT7mqoXbLcpxrg2%2FoqRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtT5blj%2BBLOJ66E%2BCrcAxkgQCq7fkojlFO5r%2FbK9dOFks9qqpA4FRDNlpaLkY%2BY%2BxnnvbuW7NBUekAlo%2Fx4hth6Sn2ATjq3URC%2FaifD65CkepeiZhCSeBd9Www6wLvKa3WMqXGk31TGW800t5Fbbs6lsPz98mkfSwX%2FaSmt4tfQD9plE4uYRenQFwPrvv1z14a5Q32CI2XzJay1mzxJYxGRS6z09LKOcSxqI7m8uJJaG10dyt8ORIaA1tEnR9TcesGJsfmbRbcnGP8wV21SvxQL%2BHh%2Bk5jDYmZeY06GNFE14XEqWIxPjlKWwnXZpz1dHX3tf2AM3cjWrPqovIOXjLe8j4gw05LbDioo%2FdTtOBNe419w%2BWfDxh52seWn1C8FaAf6h3xUCwBBWpteAO3ezbHIFBy6vXukK3XsLzf9rXQ5K3YW8CQhjQkRucNicBlWOi502xLwEpbhFEt6QOZzduF9zPAD44QP9AFnK6aU3HgjyKflACqP9SlKrF3Ck%2FVF1SnsGk%2BEE1Y0t3QeTpYraXtsKrfWh9P3TMsZE6gbkUcNMJd8gfV7AorPwbMoBJW2mo3WTcVRrruWQhKNSX5%2F8TCHW4Ed%2BHmJuX4Byc64VjfZalv1awZxe7Os6FEIQZ0b08DFgp6lZGB%2FW%2BI9MPb90skGOqUBHiEAiYugQvkA9LScG9AYQky08aX9B2ZEHVCpg809cCXRjkgeiEuVr7nSNBc5%2BHqgg2HcETSegKpaNGFNnrKf3nsVPyFUGUDF17bO2AFaT1UK957ceuuwTXr5wA43Zl2x3PzhgqFOzrrgwCHXXs9mTxG5qOlvg16UFJZ1Df5OT6TdEFC5X40nHoCFzsJm99Kc5bsguXqXjoBdSke2HYItq%2Bzh1R8M&X-Amz-Signature=7a65baf901abd6a32729d9b01deea41a3252021412c67ae14b88942dd65cc96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWARU5OK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T002406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHUkKxdf1rmntmWUxgGVhigOQ9eLK9eaugzE227KpwQIgdVxkPu2FM%2BjxftvnTRxxoIXJT7mqoXbLcpxrg2%2FoqRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtT5blj%2BBLOJ66E%2BCrcAxkgQCq7fkojlFO5r%2FbK9dOFks9qqpA4FRDNlpaLkY%2BY%2BxnnvbuW7NBUekAlo%2Fx4hth6Sn2ATjq3URC%2FaifD65CkepeiZhCSeBd9Www6wLvKa3WMqXGk31TGW800t5Fbbs6lsPz98mkfSwX%2FaSmt4tfQD9plE4uYRenQFwPrvv1z14a5Q32CI2XzJay1mzxJYxGRS6z09LKOcSxqI7m8uJJaG10dyt8ORIaA1tEnR9TcesGJsfmbRbcnGP8wV21SvxQL%2BHh%2Bk5jDYmZeY06GNFE14XEqWIxPjlKWwnXZpz1dHX3tf2AM3cjWrPqovIOXjLe8j4gw05LbDioo%2FdTtOBNe419w%2BWfDxh52seWn1C8FaAf6h3xUCwBBWpteAO3ezbHIFBy6vXukK3XsLzf9rXQ5K3YW8CQhjQkRucNicBlWOi502xLwEpbhFEt6QOZzduF9zPAD44QP9AFnK6aU3HgjyKflACqP9SlKrF3Ck%2FVF1SnsGk%2BEE1Y0t3QeTpYraXtsKrfWh9P3TMsZE6gbkUcNMJd8gfV7AorPwbMoBJW2mo3WTcVRrruWQhKNSX5%2F8TCHW4Ed%2BHmJuX4Byc64VjfZalv1awZxe7Os6FEIQZ0b08DFgp6lZGB%2FW%2BI9MPb90skGOqUBHiEAiYugQvkA9LScG9AYQky08aX9B2ZEHVCpg809cCXRjkgeiEuVr7nSNBc5%2BHqgg2HcETSegKpaNGFNnrKf3nsVPyFUGUDF17bO2AFaT1UK957ceuuwTXr5wA43Zl2x3PzhgqFOzrrgwCHXXs9mTxG5qOlvg16UFJZ1Df5OT6TdEFC5X40nHoCFzsJm99Kc5bsguXqXjoBdSke2HYItq%2Bzh1R8M&X-Amz-Signature=2db88f1faa15fbd68c0570a87283ebd6cb39b215b4eca7d4381a90b03cd61b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

