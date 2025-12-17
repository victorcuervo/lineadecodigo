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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRX26RZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhuYxVw9obkYzFuLpIqA72DR58vHdn9ZvmCwLtadqXXAIgcmxdS%2FgEMSqqWsyMyRFCZFnQyeVHTXfguVaUeMlbIGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHKRhBoR33%2BSQW1sGircAy8uqoV8emgA9SMO6MYkp2imgVLRB0VoVJ9kbu%2B19c6YSVozV14w1b6oLUtgXSR8SDepAHM5eFfmWqL1dy2PnLTr99lICSr3I3tEkSkzKi1b7gs0wv5YfvIcHXzuboforPHnrYhGc5U%2BOt4ToyGGHgJHOj49i%2FIpOJSNtUvEIYxQheWfPzW5c77vvu1LET5jT6N%2BdLeKWn9oXub5r6HP9EgHyPwTPMWupLkMsjhAChw5aritHB2vwUBMj89yMgW%2B3LEifMn2XuDLX0GTYbAANzQFjiDsqg5Fik4RBnFnURW6KL8nXIOC%2FTyCq10ft45tw4Ybz2jSRUc7UxYNe06WJ%2Fzoz6nHvoqUBEpBs3z7JndTKstq2vAKJyq6kibd91GXussKFTmNBVX%2B86GJyD0ljBTsPbQkn%2FNnrZ8t0QNN1Pp%2BhiN0cUP5Da4xnfwEkw4kB%2B3yfsVItL7zxlYwc0wGVgeylbF3oduO93n57TOFYhFXOkGVUrLcaw%2BNGLxXKigSGsnox8Iyp6sGTV%2BJXlEi%2Boqg9hNTfxGysEqczAi0rola4piR6hA931vKoF2MDG6%2BHoIq7V3Ht00wD0IJRq06QaCujIb%2BGrBVI3qcPyuHoa4f%2FlK9NmecGgYRi9R%2BMKr7h8oGOqUBIaHtZfgiZX7aX4H1ndtmBLtoMNpSpCnPUJx9LofbjmzaXJkdD0jkUHKVIuwi%2BG1zLWEDeBNojHy55Z7iuK8fngmnMfHLbdvKVN0%2FNF0hmLIUGhVB50f8mNxhtLOLSI0V9rMGS0pjRwmlnWCok21ujwgwZ8hOOwH8limFrdstejWv4PKMIB2XEFTiBMz9Z9DsylrcXNkasiadXgK6Xkfbf29BngRp&X-Amz-Signature=a2cdc4482f8d6cd459fef1f629ed69a99da3cd40fc91fcbe28bcdcdd70a432d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGRX26RZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhuYxVw9obkYzFuLpIqA72DR58vHdn9ZvmCwLtadqXXAIgcmxdS%2FgEMSqqWsyMyRFCZFnQyeVHTXfguVaUeMlbIGcq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHKRhBoR33%2BSQW1sGircAy8uqoV8emgA9SMO6MYkp2imgVLRB0VoVJ9kbu%2B19c6YSVozV14w1b6oLUtgXSR8SDepAHM5eFfmWqL1dy2PnLTr99lICSr3I3tEkSkzKi1b7gs0wv5YfvIcHXzuboforPHnrYhGc5U%2BOt4ToyGGHgJHOj49i%2FIpOJSNtUvEIYxQheWfPzW5c77vvu1LET5jT6N%2BdLeKWn9oXub5r6HP9EgHyPwTPMWupLkMsjhAChw5aritHB2vwUBMj89yMgW%2B3LEifMn2XuDLX0GTYbAANzQFjiDsqg5Fik4RBnFnURW6KL8nXIOC%2FTyCq10ft45tw4Ybz2jSRUc7UxYNe06WJ%2Fzoz6nHvoqUBEpBs3z7JndTKstq2vAKJyq6kibd91GXussKFTmNBVX%2B86GJyD0ljBTsPbQkn%2FNnrZ8t0QNN1Pp%2BhiN0cUP5Da4xnfwEkw4kB%2B3yfsVItL7zxlYwc0wGVgeylbF3oduO93n57TOFYhFXOkGVUrLcaw%2BNGLxXKigSGsnox8Iyp6sGTV%2BJXlEi%2Boqg9hNTfxGysEqczAi0rola4piR6hA931vKoF2MDG6%2BHoIq7V3Ht00wD0IJRq06QaCujIb%2BGrBVI3qcPyuHoa4f%2FlK9NmecGgYRi9R%2BMKr7h8oGOqUBIaHtZfgiZX7aX4H1ndtmBLtoMNpSpCnPUJx9LofbjmzaXJkdD0jkUHKVIuwi%2BG1zLWEDeBNojHy55Z7iuK8fngmnMfHLbdvKVN0%2FNF0hmLIUGhVB50f8mNxhtLOLSI0V9rMGS0pjRwmlnWCok21ujwgwZ8hOOwH8limFrdstejWv4PKMIB2XEFTiBMz9Z9DsylrcXNkasiadXgK6Xkfbf29BngRp&X-Amz-Signature=a81948ecaa85b8dbe278460dbc7692c489bff1ff178886429793c7945aad2a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

