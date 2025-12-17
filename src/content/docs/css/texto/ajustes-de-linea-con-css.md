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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNOKIEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4OjHebJvhgqiIKja1ExnxZqeBqqMXMA7TevX0rIjAiEAwDnL0tT9sLupN488461buGVu%2FAgvai228ZgEVzE3%2BTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAhW8Cpj17zhZ9vsjSrcA4dv%2BVpRs%2BES1Wgx8N8UN8jYsA7Bkfi2tx2mGwpnFGFQg24t5s83L2ProFaRFZ0C5uNft9t1n7Hn8T2vXGfuv7FPd23PzGXdN0nLJYnKC7nQw48iLc9rRadL4%2F98PhoXsOzzu01N8uYnS99OeDOU%2Ba58iEBmi9MSnsHa9q%2BulW65U49R8x5%2BsapHbluKnQwXV66tQ4KNQxOwKR8LhQNQArVYXb3cIVxJwcjZa9kZBQUEvqqubJZ8fl7Vd9lmXkOWePTmV6vAoVHqrsOxKX3XV7GiA8taxj0eo%2Fl5PKiYIkt2pgDT8AMhZZG2xcHS2xFYZhc9K2PeGedpSRsWmiN0TxfZsFCNNIGDgsEqp54HJVdwT8ctlSsekgST0g7mAs4loJU8wPrp2eKeCFwF3lqaJb9tjDc1KW1SddbfmPWDzmfOpw%2FqLHbPERkBHzicMnzd%2BC3w2%2FrieGgTZRBf4gZY5s%2Bn33Dgob1K5HuWaMiiQ62Sx0tT%2FgYXpa%2BTjwkeWjLVPJ1k8Gercnt%2FNhcUFmErj7fvdnEuG%2FI03G4T2GrqNIboehy5fKALckOb%2Bn9zr7tKPLi780CbFhRCGJp2qGs9ZCrrogcs6yeNxBRDmYA%2BTU0Ny4C0wjWyzSbizNUJMOiCicoGOqUByat24dWplY47HYoUUFkIuc8acNHqc3TFXyTULjJjorm0OOKCh6UvYJvyXHPSHgFI2qjra2t1aSd88uBlmdp31W7A0tmgsTHNr0UBwrtnHyRfq76MXkfjfZo88UDic6u4NI0BVN17t4%2Bp%2FZkvtqLPdKitZMU6uwf73mMhKQhG1C3%2BdtoBZRmdx8pwnz0EUr1TfoAfVF4iSnlgzyAH%2FaG3hkhdn4Xb&X-Amz-Signature=b2a9bab5fd534929b88c32143754f538a7cea67aeae3d151d3b6317a1c7cd811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNOKIEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4OjHebJvhgqiIKja1ExnxZqeBqqMXMA7TevX0rIjAiEAwDnL0tT9sLupN488461buGVu%2FAgvai228ZgEVzE3%2BTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAhW8Cpj17zhZ9vsjSrcA4dv%2BVpRs%2BES1Wgx8N8UN8jYsA7Bkfi2tx2mGwpnFGFQg24t5s83L2ProFaRFZ0C5uNft9t1n7Hn8T2vXGfuv7FPd23PzGXdN0nLJYnKC7nQw48iLc9rRadL4%2F98PhoXsOzzu01N8uYnS99OeDOU%2Ba58iEBmi9MSnsHa9q%2BulW65U49R8x5%2BsapHbluKnQwXV66tQ4KNQxOwKR8LhQNQArVYXb3cIVxJwcjZa9kZBQUEvqqubJZ8fl7Vd9lmXkOWePTmV6vAoVHqrsOxKX3XV7GiA8taxj0eo%2Fl5PKiYIkt2pgDT8AMhZZG2xcHS2xFYZhc9K2PeGedpSRsWmiN0TxfZsFCNNIGDgsEqp54HJVdwT8ctlSsekgST0g7mAs4loJU8wPrp2eKeCFwF3lqaJb9tjDc1KW1SddbfmPWDzmfOpw%2FqLHbPERkBHzicMnzd%2BC3w2%2FrieGgTZRBf4gZY5s%2Bn33Dgob1K5HuWaMiiQ62Sx0tT%2FgYXpa%2BTjwkeWjLVPJ1k8Gercnt%2FNhcUFmErj7fvdnEuG%2FI03G4T2GrqNIboehy5fKALckOb%2Bn9zr7tKPLi780CbFhRCGJp2qGs9ZCrrogcs6yeNxBRDmYA%2BTU0Ny4C0wjWyzSbizNUJMOiCicoGOqUByat24dWplY47HYoUUFkIuc8acNHqc3TFXyTULjJjorm0OOKCh6UvYJvyXHPSHgFI2qjra2t1aSd88uBlmdp31W7A0tmgsTHNr0UBwrtnHyRfq76MXkfjfZo88UDic6u4NI0BVN17t4%2Bp%2FZkvtqLPdKitZMU6uwf73mMhKQhG1C3%2BdtoBZRmdx8pwnz0EUr1TfoAfVF4iSnlgzyAH%2FaG3hkhdn4Xb&X-Amz-Signature=44d95e265f144b36b151baa98c047838011f662a0e07aabfeae2f698f6286dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

