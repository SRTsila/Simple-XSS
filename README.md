# Simple-XSS
Web Task

Практическое задание реализации активной XSS атаки. Бикоев Константин КН-302.

Атакуемый сервер запускается на порту 3000.

Атакующий на порту 4200

1)Злоумышленник заходит по адресу localhost:3000/register.
2)Вводит свой атакующий скрипт в поле "Comments" и затем отправляет форму.
3)Далее обычный пользователь заходит и заполняет форму.
4)Обычного пользователя переадресовывает на страницу, где отображены введенные им данные, а также последний комментарий от предыдущих пользователей.
5)Так как предыдущим пользователем был злоумышленник и он оставил атакующий скрипт, то атакующий скрипт выполняется при загрузке страницы и ворует куки пользователя.
