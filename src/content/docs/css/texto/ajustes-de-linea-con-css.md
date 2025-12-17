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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJJZQLB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8LEwhACzIanAPTns6YO3l26WaI2DS1YWH0GQP3Jj84AiA9wSvnzT6WFQK3yweORlPbUdPlp6zMSg%2B%2F%2BNBxYMbVVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMI9lQZ%2B3W5IN9H3tcKtwDdavAaKPmE%2BgehGQezEJ5sG%2F8mLbyLfJ%2B2CFeBBh5Ymv3il%2BjWAm2g07BovEtT8DHT8dyPW0HvqZdv2BFpH3qXC5Ish8T0w%2BRED59DTV7d1YAF%2FIKpauQDCdIDmZKVPHimVDmvy%2ByHNu4fNqKEcD9RnlCbdSXydRlo2KEltVKuN40wjRGPQfFZy1qgHJnwxRfXUwdOCEUAtj2%2FJ6lpgirVeFjop0JX%2Fn0Pj8wQuetq73CXPnMHJB5Dk02C%2BYwPdWpf6%2BfUgDcPi1S%2FvE56jUZXdtlczDu4taQrT6NbU%2BoTJuToA5Py9X2go8NTKNDtmvv36X1QgExZKzbcNCUaqLvQ8pLgSvTg7OGgjFUzwfdD1RkaU8oGSGT60ZMsggI0p5%2B4%2F7%2BBNy2HwC35khxx7E5TgLhQYnKquQOR1eSBU4CdgL79tTtDQwy%2BoOJKtcvNSk2i9CR0iJ00k8RQaBIRNcUSDuE5COs6MclLfU%2BqB%2BbJtoIGHAOy2KZMW%2BiqpgzAaoE4hXZJGFzXIvODyVdaRuVJgumqqPQqHw1EpMCtm2y8kh%2Fnb0PjHmvqb4%2Ft1gN8C4F2p8NVfGs7IhAWNNQfJl1cmoB8YaBWXLPGrq7NZmzUxen%2BeEpLAovvkCdZV8wj8%2BIygY6pgGCeXH9UHU2ZR3987xQoQMsgCIzNnjz4ussCVxAvvqg66FrhJs0FuyA0DIhKrIlEHpN%2BnV4tQuk6HBg7QJGoRTXHqRzLnxycIzkh7D8PmEyZBEQ9x3dy0SiA%2BguNwr6aFkBnkQFaajo2rbUhKKoWbxAtsVVzHOxX8XtZxQxfgOyHjwboXRBNWNnUov6kStnbRSmG5kqdIkLxy%2BnIm0E212U%2F%2BG3OsxU&X-Amz-Signature=d8b19cb3c56462080575b2c2203bc8c9e5220730d19c8b2e655632dd2e513f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJJZQLB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8LEwhACzIanAPTns6YO3l26WaI2DS1YWH0GQP3Jj84AiA9wSvnzT6WFQK3yweORlPbUdPlp6zMSg%2B%2F%2BNBxYMbVVyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMI9lQZ%2B3W5IN9H3tcKtwDdavAaKPmE%2BgehGQezEJ5sG%2F8mLbyLfJ%2B2CFeBBh5Ymv3il%2BjWAm2g07BovEtT8DHT8dyPW0HvqZdv2BFpH3qXC5Ish8T0w%2BRED59DTV7d1YAF%2FIKpauQDCdIDmZKVPHimVDmvy%2ByHNu4fNqKEcD9RnlCbdSXydRlo2KEltVKuN40wjRGPQfFZy1qgHJnwxRfXUwdOCEUAtj2%2FJ6lpgirVeFjop0JX%2Fn0Pj8wQuetq73CXPnMHJB5Dk02C%2BYwPdWpf6%2BfUgDcPi1S%2FvE56jUZXdtlczDu4taQrT6NbU%2BoTJuToA5Py9X2go8NTKNDtmvv36X1QgExZKzbcNCUaqLvQ8pLgSvTg7OGgjFUzwfdD1RkaU8oGSGT60ZMsggI0p5%2B4%2F7%2BBNy2HwC35khxx7E5TgLhQYnKquQOR1eSBU4CdgL79tTtDQwy%2BoOJKtcvNSk2i9CR0iJ00k8RQaBIRNcUSDuE5COs6MclLfU%2BqB%2BbJtoIGHAOy2KZMW%2BiqpgzAaoE4hXZJGFzXIvODyVdaRuVJgumqqPQqHw1EpMCtm2y8kh%2Fnb0PjHmvqb4%2Ft1gN8C4F2p8NVfGs7IhAWNNQfJl1cmoB8YaBWXLPGrq7NZmzUxen%2BeEpLAovvkCdZV8wj8%2BIygY6pgGCeXH9UHU2ZR3987xQoQMsgCIzNnjz4ussCVxAvvqg66FrhJs0FuyA0DIhKrIlEHpN%2BnV4tQuk6HBg7QJGoRTXHqRzLnxycIzkh7D8PmEyZBEQ9x3dy0SiA%2BguNwr6aFkBnkQFaajo2rbUhKKoWbxAtsVVzHOxX8XtZxQxfgOyHjwboXRBNWNnUov6kStnbRSmG5kqdIkLxy%2BnIm0E212U%2F%2BG3OsxU&X-Amz-Signature=ba17866bcea1ba007b7c563b3f454eb3ee814581955c3ab856d27da12f8cf1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

