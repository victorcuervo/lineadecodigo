---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZKYRZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NIECatTVVUBjPQ6rabdxHo59Uywg4%2FdDrOGbM3ZqBQIgeOjN6tZl2YO2BZEFZTya7QphLrUMt2jVN5lnoDwfIlUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEqTq1KTBBNWk%2BqG8yrcAwOmpz9i0twSbaKe8YmS8RwK2W7lN%2BTfknSlTB%2Bl7gl3HMWlumhvRE5tGPTz23Tp7cCHL3EaS9%2Bzy%2FNrJHjpRIP%2FB4miQWcOTu6JE8QK1H9xqHf9YKikQgxXb27BUi7b34Z7AE%2BhSgI5IG2WvGnfnmZYwspfAy0p9m8sh6zZaqcMVWQjEnY3xEEWTjdW8XbdUpmps9VwEg2aLK4lD5ppWVlEYoLP1LHMQyyI9il37Lb31AWSBb%2B0pDPjvr9ZS3asmTxYSHrveCNw8a0Tl9Cq25zu7YgfBfkm2a%2BU%2F0IW8GbWnksabC66RTdYTD%2BS%2F94agJn2wJDXO2uIsmQ5cz86d64vqiqpJEidPj3vGnu7JjqmcpBIUkt2R4th02D3%2Bnd3yv7Zw1ONfbL3qoe96lNmZXcm1a4Qf3zfbINEzC9RCqHgEYLAJ0lyldK%2BfoBMu829cDJ0KPBQOKJCgpWLbjDGezWt1L%2BCHfTCIhjv4QDBDfIaLXJYmA7vS%2FaNibkyd1n6AX5j5EkY9OVhnU3dAGtUVL34hVVml%2F4UBNEvJa4XXSHur8%2F7AV05apQa%2FPDrxNCB4ZCxhGxb7UjSkW%2FISVE5gBh00mZmCzdPTaty0NZ4HGh5U40vjqObbsQm%2Fw9yMKWPisoGOqUB%2FkE51OPAxzM5Ea%2Fjt0wpgPFGn%2FkbAamPoUchLz6gaHN7YfczkwnP1dR4qoO9G3fuWjNrku4RfK1NA0fMMQPu44X3sbbbwfnktiIRLpAgrKLXJfKpT6cwArHjMDyIP5DK0pQt8P%2BheaJ4TTdg2P%2FcpVmfTFFXl7V3cKMOD5b4Juh28dKn%2FEiEBz2pAIW0JAQPPKcBsebsvItvBtwGIPJTVe8EtjhK&X-Amz-Signature=433e6dccb861014dc93d9b68248931c716b50e25b34d63d88ffcc34335fe4a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZKYRZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1NIECatTVVUBjPQ6rabdxHo59Uywg4%2FdDrOGbM3ZqBQIgeOjN6tZl2YO2BZEFZTya7QphLrUMt2jVN5lnoDwfIlUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEqTq1KTBBNWk%2BqG8yrcAwOmpz9i0twSbaKe8YmS8RwK2W7lN%2BTfknSlTB%2Bl7gl3HMWlumhvRE5tGPTz23Tp7cCHL3EaS9%2Bzy%2FNrJHjpRIP%2FB4miQWcOTu6JE8QK1H9xqHf9YKikQgxXb27BUi7b34Z7AE%2BhSgI5IG2WvGnfnmZYwspfAy0p9m8sh6zZaqcMVWQjEnY3xEEWTjdW8XbdUpmps9VwEg2aLK4lD5ppWVlEYoLP1LHMQyyI9il37Lb31AWSBb%2B0pDPjvr9ZS3asmTxYSHrveCNw8a0Tl9Cq25zu7YgfBfkm2a%2BU%2F0IW8GbWnksabC66RTdYTD%2BS%2F94agJn2wJDXO2uIsmQ5cz86d64vqiqpJEidPj3vGnu7JjqmcpBIUkt2R4th02D3%2Bnd3yv7Zw1ONfbL3qoe96lNmZXcm1a4Qf3zfbINEzC9RCqHgEYLAJ0lyldK%2BfoBMu829cDJ0KPBQOKJCgpWLbjDGezWt1L%2BCHfTCIhjv4QDBDfIaLXJYmA7vS%2FaNibkyd1n6AX5j5EkY9OVhnU3dAGtUVL34hVVml%2F4UBNEvJa4XXSHur8%2F7AV05apQa%2FPDrxNCB4ZCxhGxb7UjSkW%2FISVE5gBh00mZmCzdPTaty0NZ4HGh5U40vjqObbsQm%2Fw9yMKWPisoGOqUB%2FkE51OPAxzM5Ea%2Fjt0wpgPFGn%2FkbAamPoUchLz6gaHN7YfczkwnP1dR4qoO9G3fuWjNrku4RfK1NA0fMMQPu44X3sbbbwfnktiIRLpAgrKLXJfKpT6cwArHjMDyIP5DK0pQt8P%2BheaJ4TTdg2P%2FcpVmfTFFXl7V3cKMOD5b4Juh28dKn%2FEiEBz2pAIW0JAQPPKcBsebsvItvBtwGIPJTVe8EtjhK&X-Amz-Signature=6009039d2dcc4be9838ac49f9cb7bb167be492bf5bdb36624e78dd4e2d1c0b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

